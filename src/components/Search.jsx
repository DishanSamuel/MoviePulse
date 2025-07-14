import React from 'react'

const Search = ({setsearchTerm, searchTerm}) => {
  return (
    <div className='search'>
      <div>
        <img src='./search.svg' alt='search-icon' />
        <input
          type='text'
          placeholder='Search for a movie...'
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Search