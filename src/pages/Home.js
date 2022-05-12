import {Grid, Loading} from '@nextui-org/react'
import React from 'react'
import CardComponent from '../components/Card'
import {useFetch} from '../hooks/useFetch'

const Home = () => {
  const {data, loading} = useFetch('/recipes/complexSearch')
  console.log(data)
  if (loading) return <Loading size="xl" />
  return (
    <Grid.Container gap={2} justify="center">
      {data?.results.map((recipe) => {
        return <Grid xs={2.2} key={recipe.id}>
          <CardComponent {...recipe}/>
        </Grid>
      })}
    </Grid.Container>
  )
}

export default Home
