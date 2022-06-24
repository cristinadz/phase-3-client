import React from 'react'
import BookDisplay from './BookDisplay'
import BookForm from './BookForm'
import SearchBar from './SearchBar'

function Browse({books, addBook, deleteBook}) {


  return (
    <div className = "container">
        <div className= "row"> 
            <div className = "col-10">
                <BookDisplay books={books} deleteBook ={deleteBook} />
            </div>
            <div className='col-2'> 
                <BookForm addBook= {addBook}/>
                <SearchBar />
            </div>
        </div>
    </div>
  )
}

export default Browse