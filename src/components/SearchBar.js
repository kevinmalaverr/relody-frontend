import React, { useState } from 'react'
import '../styles/components/SearchBar.scss'
import { useInputValue } from '../hooks/useInputValue'
import { useOutsideClick } from '../hooks/useOutsideClick'
import { getFocusText } from '../utils/getFocusText'
import { addToSearchStorage, getSearchStorage } from '../utils/searchStorage'
import songs from '../mocks/songs'

const lastestSearch = ['ultimas', 'busquedas', 'xd']

export const SearchBar = () => {
  const [search, setSearch] = useInputValue('')
  const [focused, setFocused] = useState(false)
  const ref = useOutsideClick(() => setFocused(false))

  getSearchStorage()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event)
    addToSearchStorage()
  }

  const regex = new RegExp(`^.*${search}.*$`)
  const matchedSongs = search ? songs.filter(song => song.match(regex)) : lastestSearch
  return (
    <div ref={ref} className='SearchBar-container'>
      <form className='SearchBar' onSubmit={handleSubmit}>
        <input placeholder='buscar cancion' type='text' onChange={setSearch} onFocus={(e) => setFocused(true)} />
        <button><i className='Icon_search_outline' /></button>
      </form>
      {(focused && matchedSongs.length > 0)
        ? <div className='SearchBar-desplegable'>
          {matchedSongs.map((song, i) => <a className='SearchBar-item' href={`song/${song}`} key={i}>{getFocusText(song, search, 'bold')}</a>)}
          </div>
        : null}
    </div>
  )
}
