import React from 'react'
import '../styles/components/TutorialCard.css'
import { useHistory } from 'react-router-dom'

const repeatItem = (n, element) => {
  const list = []
  for (let index = 0; index < n; index++) {
    list.push(element(index))
  }
  return list
}

export const TutorialCard = ({ songName, artist, difficult, likes, tutorialUrl = 'tuto' }) => {
  const history = useHistory()
  const difficultColor = (difficult < 3) ? 'easy' : (difficult === 3) ? 'medium' : 'hard'

  return (
    <article className='tutorial-card' onClick={() => history.push(tutorialUrl)}>
      <img src='https://images-na.ssl-images-amazon.com/images/I/31PS7MIr-ZL._SX300_SY300_QL70_ML2_.jpg' alt='' className='tutorial-card__image' />
      <div className='tutorial-card__a'>
        <b>{songName}</b>
        <br />
        <span className='tutorial-card__artist'>{artist}</span>
      </div>
      <div className='tutorial-card__b'>
        <div>
          <i className='Icon_star_outline mr-1' /><span>{likes}</span>
        </div>
        <div className='tutorial-card__difficult'>
          <span className='mr-1'>Difficult: </span>
          <div className='tutorial-card__difficult-list'>
            {repeatItem(difficult, (i) => <div key={i} className={`tutorial-card__difficult-bar tutorial-card__difficult-bar--${difficultColor}`} />)}
            {repeatItem(5 - difficult, (i) => <div key={i} className='tutorial-card__difficult-bar' />)}
          </div>
        </div>
      </div>
    </article>
  )
}
