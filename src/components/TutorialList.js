import React from 'react'
import '../styles/components/TutorialList.css'
import { connect } from 'react-redux'
import { TutorialCard } from './TutorialCard'

const TutorialList = () => {
  return (
    <section className='tutorial-list'>
      {[0, 1, 2, 3].map((card, i) => (
        <TutorialCard key={i} card />
      ))}
    </section>
  )
}

const mapStateToProps = state => ({
  arreglo: state
})
export default connect(mapStateToProps, null)(TutorialList)
