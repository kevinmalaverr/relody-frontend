import React, { useEffect } from 'react'
import { Layout } from '../components/Layout'
import { SearchBar } from '../components/SearchBar'
import TutorialList from '../components/TutorialList'

const Songs = () => {
  // useEffect(() => {
  //   window.fetch('http://localhost:3000/api/tutorials')
  //     .then(res => res.json())
  //     .then(result => {
  //       console.log(result)}
  //     })
  // }, [])

  return (
    <Layout>
      <section className='hero'>
        <SearchBar />
      </section>
      <main>
        <TutorialList />
      </main>
    </Layout>
  )
}

export default Songs
