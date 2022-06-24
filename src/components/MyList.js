import React from 'react'

function MyList({books}) {

  let myBookList = books.filter( book => book.filter === true)
  console.log(myBookList)

  // let myList = books.map ( book => {
  //   if (book.favorites === true){

  //     return book 
  //   }
  //   else { 
  //     return false
  //   }


  // })


  return (
    <div> 

    </div>
  )
}

export default MyList