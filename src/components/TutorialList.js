import React from 'react'
import '../styles/components/TutorialList.css'
import { connect } from 'react-redux'
import { TutorialCard } from './TutorialCard'

const mock = [{ id: 1, songName: 'Konklab', artist: 'Claude Dollimore', instrument: 'Chevrolet', difficult: 5, content: [{}] },
  { id: 2, songName: 'Regrant', artist: 'Osborne Keitley', instrument: 'Honda', difficult: 1, content: [{}, {}] },
  { id: 3, songName: 'Trippledex', artist: 'Brien Reihm', instrument: 'Mitsubishi', difficult: 4, content: [{}, {}, {}, {}, {}] },
  { id: 4, songName: 'Ventosanzap', artist: 'Wesley Gooderridge', instrument: 'GMC', difficult: 1, content: [{}, {}, {}, {}, {}] },
  { id: 5, songName: 'Sonsing', artist: 'Vivia Frizell', instrument: 'Lexus', difficult: 4, content: [{}, {}, {}, {}, {}] },
  { id: 6, songName: 'Stronghold', artist: 'Madel Taynton', instrument: 'GMC', difficult: 3, content: [{}] }]

const TutorialList = () => {
  return (
    <section className='tutorial-list'>
      {mock.map((card, i) => (
        <TutorialCard key={i} {...card} />
      ))}
    </section>
  )
}

const mapStateToProps = state => ({
  arreglo: state
})
export default connect(mapStateToProps, null)(TutorialList)
