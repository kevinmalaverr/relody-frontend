import React from 'react'
import { connect } from 'react-redux'
import { TutorialCard } from './TutorialCard'

const TutorialList = () => {
  return (
    <>
      {[0, 1, 2, 3].map((card, i) => (
        <TutorialCard key={i} card />
      ))}
    </>
  )
}

const mapStateToProps = state => ({
  arreglo: state
})
export default connect(mapStateToProps, null)(TutorialList)
