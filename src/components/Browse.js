import React from 'react'
import BookDisplay from './BookDisplay'
import BookForm from './BookForm'
import SearchBar from './SearchBar'

function Browse({books}) {


  return (
    <div>
        <div>
          <BookDisplay books={books}/>
        </div>
        <SearchBar />
        <BookForm />
    </div>
  )
}

export default Browse