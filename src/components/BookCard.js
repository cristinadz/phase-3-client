import React from 'react'

function BookCard({book}) {
   
  return (
    <div className=''>
        <h2>{book.title}</h2>
        <img src={book.image} alt="descriptive text"/>
        <h3> by {book.author} </h3>
        <button> add to list </button>
        <button> delete </button>
     
    </div>
  )
}

export default BookCard