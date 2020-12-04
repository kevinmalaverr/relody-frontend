import React, { useState } from 'react'
import '../styles/components/SearchBar.scss'
import { useInputValue } from '../hooks/useInputValue'
import songs from '../mocks/songs'

export const SearchBar = () => {
  const [search, setSearch] = useInputValue('')
  const regex = new RegExp(`^.*${search}.*$`)

  return (
    <div className='SearchBar-container'>
      <div class='SearchBar' action=''>
        <input type='text' onChange={setSearch} onFocus={(e) => console.log(e)} />
        <button />
      </div>
      {
        search
          ? <div className='SearchBar-desplegable'>
            {songs.filter(song => {
              return song.match(regex)
            }
            ).map(song => {
              const songArr = song.split(search)
              const res = songArr.map(el => <>{el}<b>{search}</b></>)
              return <p>{res}</p>
            }
            )}
            </div>
          : null
      }
    </div>
  )
}
