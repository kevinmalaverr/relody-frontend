import React, { useState } from 'react'
import '../styles/components/SearchBar.css'
import { useInputValue } from '../hooks/useInputValue'
import { useOutsideClick } from '../hooks/useOutsideClick'
import { getFocusText } from '../utils/getFocusText'
import searchStorage from '../utils/searchStorage'
import songs from '../mocks/songs'

const lastestSearch = searchStorage.getStorage()

export const SearchBar = () => {
  const [search, setSearch] = useInputValue('')
  const [focused, setFocused] = useState(false)
  const ref = useOutsideClick(() => setFocused(false))

  const handleSubmit = (event) => {
    event.preventDefault()
    searchStorage.addItem(search)
    // TODO: redirect page
  }

  const regex = new RegExp(`^.*${search}.*$`)
  const matchedSongs = search ? [...lastestSearch, ...songs].filter(song => song.match(regex)) : lastestSearch

  return (
    <div ref={ref} className='search-bar__container'>
      <form className='search-bar' onSubmit={handleSubmit}>
        <input placeholder='buscar cancion' type='text' onChange={setSearch} onFocus={(e) => setFocused(true)} />
        <button><i className='Icon_search_outline' /></button>
      </form>
      {(focused && matchedSongs.length > 0)
        ? <div className='search-bar-desplegable'>
          {matchedSongs.map((song, i) => <a className='search-bar-item' href={`song/${song}`} key={i}>{getFocusText(song, search, 'bold')}</a>)}
          </div>
        : null}
    </div>
  )
}
