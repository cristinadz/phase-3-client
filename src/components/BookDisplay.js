import React from 'react'
import BookCard from './BookCard'

function BookDisplay({books}) {

    const displayBooks = books.map ( book => <BookCard book={book}/> )

  return (
    <div >
        {displayBooks}
    </div>
  )
}

export default BookDisplay