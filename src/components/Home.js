import React from 'react'

function Home({featuredBook}) {
  return (
    <div className='container'>
        <h2> {featuredBook.title}</h2>
        <img src={featuredBook.image}></img>
        <p>{featuredBook.description}</p>

    </div>
  )
}

export default Home