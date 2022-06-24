import React from 'react'
import BookCard from './BookCard'

function BookDisplay({books, deleteBook}) {

    const displayBooks = books.map ( book => <BookCard book={book} deleteBook={deleteBook} /> )

  return (
    <div >
        {displayBooks}
    </div>
  )
}

export default BookDisplay