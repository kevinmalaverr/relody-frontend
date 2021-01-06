import React from 'react'
import '../styles/components/TutorialCard.css'
import { Link } from 'react-router-dom'

const listItems = (n, element) => {
  const list = []
  for (let index = 0; index < n; index++) {
    list.push(element)
  }
  return list
}

export const TutorialCard = ({ title = 'tutorial', difficult = Math.floor(Math.random() * (5 - 1)) + 1, tutorialUrl = 'tutorial' }) => {
  const difficultColor = (difficult < 3) ? 'easy' : (difficult === 3) ? 'medium' : 'hard'

  return (
    <article className='tutorial-card'>
      <img src='https://images-na.ssl-images-amazon.com/images/I/31PS7MIr-ZL._SX300_SY300_QL70_ML2_.jpg' alt='' className='tutorial-card__image' />
      <div className='tutorial-card__a'>
        <b>Nothing else matters</b>
        <br />
        <span className='tutorial-card__artist'>Metallica</span>
      </div>
      <div className='tutorial-card__b'>
        <div>
          <i className='Icon_star_outline mr-1' /><span>15</span>
        </div>
        <div className='tutorial-card__difficult'>
          <span className='mr-1'>Difficult: </span>
          <div className='tutorial-card__difficult-list'>
            {listItems(difficult, <div className={`tutorial-card__difficult-bar tutorial-card__difficult-bar--${difficultColor}`} />)}
            {listItems(5 - difficult, <div className='tutorial-card__difficult-bar' />)}
          </div>
        </div>
      </div>
    </article>
  )
}
