import React from 'react'
import { Layout } from '../components/Layout'
import { SearchBar } from '../components/SearchBar'
import TutorialList from '../components/TutorialList'

const Songs = () => {
  return (
    <Layout>
      <section className='container'>
        <SearchBar />
      </section>
      <main className='container'>
        <TutorialList />
      </main>
    </Layout>
  )
}

export default Songs
