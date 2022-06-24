import React from 'react'
import { useState } from 'react'

function BookCard({book, deleteBook, updateFav}) {
  const [favorite, setFavorite] = useState(false)

  function handleDelete(id){
    fetch(`http://localhost:9292/books/${id}`, {
        method: 'DELETE',
        headers: { Accept: 'application/json' }
    })
    .then(res => res.json())
    .then(book => deleteBook(book.id))
 }

function handleAddToList(){
  fetch(`http://localhost:9292/books/${book.id}`, {
     method: "PATCH",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({favorite: favorite}),
  })
     .then((resp) => resp.json())
     .then((book) => { setFavorite(!book.favorite)
       console.log(book.favorite)
     });
}

// const updateFav = (id) => {
  
//   // useEffect(() => {
//   // fetch(`http://localhost:9292/login/users/${id}`)
//   //     .then(res => res.json())
//   //     .then( book => {
//   //         setFavorite(book.favorite)
//   //     })

//   // }, [id])

//   fetch(`http://localhost:9292/login/users/${book.id}`, {
//      method: "PATCH",
//      headers: { "Content-Type": "application/json" },
//      body: JSON.stringify({favorite: favorite}),
//   })
//      .then((resp) => resp.json())
//      .then((data) => {
       
//      });
// };

  return (
    <div className='container-fluid'>
      <div>
        <h4>{book.title}</h4>
        <img src={book.image} alt="descriptive text"/>
        <p className='lead'> by {book.author.name} </p>
        {/* <p> {book.genre.name}</p> */}
        <button className = "btn btn-outline-warning" onClick = {handleAddToList} value={book.id}> { favorite? "in my list" : "add to list" } </button>
        <button className = "btn btn-outline-danger" onClick={ () => handleDelete(book.id)}> x </button>
      </div>
    </div>
  )
}

export default BookCard