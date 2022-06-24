import React from 'react'
import {useState} from 'react'

function BookForm({addBook}) {
  const [bookFormData, setBookFormData] = useState({
      title: "",
      image: "",
      author: "",
      description: "",
      favorite: false
  })

  function handleSubmit(e){

    fetch('http://localhost:9292/books', {

      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(bookFormData)
    })
    .then(res => res.json())
    .then( book => addBook(book))

  }

  return (
    <div >
      <p className='lead'>Add a Book</p>
      <form className = "" onSubmit = {handleSubmit}> 
        <label> title </label>
          <input type="text" name="title" value={bookFormData.title} onChange ={e => setBookFormData({...bookFormData, title: e.target.value})}/>
       
        <label> image url </label>
          <input type="text" name="image" value={bookFormData.image} onChange ={e => setBookFormData({...bookFormData, image: e.target.value})}/>
        
        <label> author </label>
          <input type="text" name="author" value={bookFormData.author} onChange ={e => setBookFormData({...bookFormData, author: e.target.value})}/>
       
        <label> description </label>
          <textarea type="text" name="description" value={bookFormData.description} onChange ={e => setBookFormData({...bookFormData, description: e.target.value})}/>
          <button  type="submit">submit</button>
      </form>
    </div>
  )
}

export default BookForm