import React from 'react'

function BookForm() {
  // const [bookFormData, setBookFormData] = useState({
  //     title: "",
  //     image: "",
  //     description: "",
  //     favorite: false
  // })
  return (
    <div>
      <h3>Add a Book</h3>
      <form> 
          <input type="text" name="title" value=""></input>
          <input type="text" name="title" value=""></input>
          <textarea type="text" name="title" value=""></textarea>

      </form>
    </div>
  )
}

export default BookForm