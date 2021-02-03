import React from 'react'
import '../styles/components/TutorialList.css'
import { TutorialCard } from './TutorialCard'
import { useFetchData } from '../hooks/useFetchData'
import TutorialCardLoading from './TutorialCardLoading'

const TutorialList = () => {
  const { error, loading, data: tutorials } = useFetchData({ apiUrl: `${process.env.API_URL}/tutorials`, defaultValue: [], selector: state => state.tutorials, reducer: 'TUTORIALS_FETCH' })
  if (error) {
    return (
      <section>
        han error has ocurred
      </section>
    )
  }

  if (loading) {
    return (
      <section className='tutorial-list'>
        {[0, 0, 0, 0, 0].map((_, i) => (
          <TutorialCardLoading key={i} />
        ))}
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

export default TutorialList
