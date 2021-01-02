import React, { useEffect } from 'react'
import { Layout } from '../components/Layout'
import { SearchBar } from '../components/SearchBar'

const Songs = () => {
  // useEffect(() => {
  //   window.fetch('http://localhost:3000/api/tutorials')
  //     .then(res => res.json())
  //     .then(result => {
  //       console.log(result)}
  //     })
  // }, [])

  return (
    <Layout title='Buscar tutorailes de camciones'>
      <section className='hero'>
        <SearchBar />
      </section>
      <main>
        <p>hila</p>
      </main>
    </Layout>
  )
}

export default Songs
