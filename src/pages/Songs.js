import React from 'react'
import { Layout } from '../components/Layout'
import { SearchBar } from '../components/SearchBar'

const Songs = () => {
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
