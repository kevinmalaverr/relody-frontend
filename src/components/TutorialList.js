import React from 'react'
import '../styles/components/TutorialList.css'
import { connect } from 'react-redux'
import { TutorialCard } from './TutorialCard'
import { useFetchData } from '../hooks/useFetchData'

const TutorialList = () => {
  const [error, loading, tutorials] = useFetchData(`${process.env.API_URL}/tutorials`, [])

  if (loading) {
    return (
      <section className='tutorial-list'>
        cargando...
      </section>
    )
  }

  return (
    <section className='tutorial-list'>
      {tutorials.map((card, i) => (
        <TutorialCard key={i} {...card} />
      ))}
    </section>
  )
}

const mapStateToProps = state => ({
  arreglo: state
})
export default connect(mapStateToProps, null)(TutorialList)
