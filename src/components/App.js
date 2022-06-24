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