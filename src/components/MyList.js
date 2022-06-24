import React from 'react'

function MyList({books}) {

  let myListBooks = books.map ( book => book.favorites === true )
  console.log(myListBooks)
  return (
    <div> 

    </div>
  )
}

export default MyList