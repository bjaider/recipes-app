import {Grid, Loading, Pagination} from '@nextui-org/react'
import React, {useState} from 'react'
import CardComponent from '../components/Card'
import {useFetch} from '../hooks/useFetch'

const Home = () => {
  const [pages, setPages] = useState(0)
  const params = `&offset=${pages}`
  const {data, loading} = useFetch('/recipes/complexSearch',params)
  console.log(data)
  const totalPages =
    data.totalResults < 900 ? Math.ceil(data.totalResults / 10) : 90
  if (loading) return <Loading size="xl" />
  return (
    <Grid.Container gap={2} justify="center">
      {data?.results.map((recipe) => {
        return (
          <Grid xs={2.2} key={recipe.id}>
            <CardComponent {...recipe} />
          </Grid>
        )
      })}
      <Pagination rounded total={totalPages} onChange={(page)=>setPages((page-1)*10)}/>
    </Grid.Container>
  )
}

export default Home
