import {Grid, Input, Loading, Pagination, Row} from '@nextui-org/react'
import React, {useState} from 'react'
import CardComponent from '../components/Card'
import {useFetch} from '../hooks/useFetch'
import '../styles/Home.css'
import Filter from './Filters'
const Home = () => {
  const [pages, setPages] = useState(0)
  const params = `&offset=${pages}`
  const {data, loading} = useFetch('/recipes/complexSearch', params)
  console.log(data)
  const totalPages =
    data.totalResults < 900 ? Math.ceil(data.totalResults / 10) : 90
  if (loading) return <Loading size="xl" />
  return (
    <div className='home-container'>
      <Filter/>
      <Grid.Container gap={2} className="home-grid-container">
        {data?.results.map((recipe) => {
          return (
            <Grid xs={2.2} key={recipe.id}>
              <CardComponent {...recipe} />
            </Grid>
          )
        })}
      </Grid.Container>
      <Pagination
        rounded
        total={totalPages}
        onChange={(page) => setPages((page - 1) * 10)}
        className="pagination"
      />
    </div>
  )
}

export default Home
