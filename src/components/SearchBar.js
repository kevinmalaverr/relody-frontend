import React, { useState } from 'react'
import '../styles/components/SearchBar.scss'
import { useInputValue } from '../hooks/useInputValue'
import { useOutsideClick } from '../hooks/useOutsideClick'
import { getFocusText } from '../utils/getFocusText'
import songs from '../mocks/songs'

const lastestSearch = ['ultimas', 'busquedas', 'xd']

export const SearchBar = () => {
  const [search, setSearch] = useInputValue('')
  const [focused, setFocused] = useState(false)
  const ref = useOutsideClick(() => setFocused(false))

  const regex = new RegExp(`^.*${search}.*$`)
  const matchedSongs = search ? songs.filter(song => song.match(regex)) : lastestSearch
  return (
    <div ref={ref} className='SearchBar-container'>
      <div class='SearchBar' action=''>
        <input type='text' onChange={setSearch} onFocus={(e) => setFocused(true)} />
        <button />
      </div>
      {(focused && matchedSongs.length > 0)
        ? <div className='SearchBar-desplegable'>
          {matchedSongs.map((song, i) => <a className='SearchBar-item' href={`song/${song}`} key={i}>{getFocusText(song, search, 'bold')}</a>)}
          </div>
        : null}
    </div>
  )
}
