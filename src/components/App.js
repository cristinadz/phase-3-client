import React from 'react'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home'
import Browse from './Browse'
import NavBar from './NavBar'
import MyList from './MyList'
import Footer from './Footer'


function App() {

const [allBooks, setAllBooks] = useState([])
const [featuredBook, setFeaturedBook] = useState([])

// const [ isOnList, setIsOnList] = useState(false)

// initial fetch for display of all books in browse
useEffect( () => {
    fetch("http://localhost:9292/books")
    .then( res => res.json() )
    .then ( data => setAllBooks(data) )
}, [])

// fetch to display random book in landing page
useEffect( () => {
    fetch("http://localhost:9292/home")
    .then( res => res.json() )
    .then ( data => setFeaturedBook(data) )
}, [])

// FUNCTIONS

function addBook(book){
    setAllBooks([book, ...allBooks])
}

function deleteBook(id){
    const updatedBooks = allBooks.filter( book => book.id !== id)
    setAllBooks(updatedBooks)
    console.log(updatedBooks)
}





// function updateFav(bookID){
//     const matchedBook = allBooks.find( book => {

//         if (bookID === '${book.id}'){
//             return true
//         }
//         else { return false}
//     })
//     console.log(matchedBook)
//     setFavorites([...favorites, matchedBook])
//     console.log(favorites)
// }

// on click we get that books ID, then we can set this book.favorites !== 
// our back end should give me all the books that have the favorite boolean set to true, then I would display this on myList
  return (
    <Router>
        <NavBar />
        <Switch> 
                <Route exact path="/"> 
                    <Home featuredBook = {featuredBook} />
                </Route>

                <Route exact path="/browse"> 
                    <Browse books = {allBooks} addBook={addBook} deleteBook = {deleteBook} />
                </Route>
        
                <Route exact path="/my-list"> 
                    <MyList books = {allBooks}/>
                </Route>
            </Switch>
        {/* <Footer /> */}
    </Router>
  )
}

export default App