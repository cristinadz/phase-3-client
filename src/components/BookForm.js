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
      <form className = "row g-3" onSubmit = {handleSubmit}> 

          <input className="form-control" type="text" placeholder ="title" name="title" value={bookFormData.title} onChange ={e => setBookFormData({...bookFormData, title: e.target.value})}/>
       

          <input className="form-control" type="text" placeholder = "image url" name="image" value={bookFormData.image} onChange ={e => setBookFormData({...bookFormData, image: e.target.value})}/>
        
 
          <input className="form-control" type="text" placeholder = "author" name="author" value={bookFormData.author} onChange ={e => setBookFormData({...bookFormData, author: e.target.value})}/>
       

          <textarea className="form-control" type="text" placeholder="description" name="description" value={bookFormData.description} onChange ={e => setBookFormData({...bookFormData, description: e.target.value})}/>
          <button className="btn btn-primary" type="submit">submit</button>
      </form>
    </div>
  )
}

export default BookForm