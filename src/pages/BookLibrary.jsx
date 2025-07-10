import React, { useState } from 'react'
import { useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import BookCard from '../components/BookCard';



const BookLibrary = () => {
    const [books , setBooks] = useState([])
    const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    year:'',
    image: '',
    rating:'',
  });

   const getBooks = () => {
    axios.get('https://book-library-be-z5om.onrender.com/books')
      .then((res) => setBooks(res.data))
      .catch((err) => console.error(err));

  };

   useEffect(() => {
    getBooks();
  }, []);

  const bookInput =(event)=>{
let temNewBook= {...newBook}
temNewBook[event.target.name]=event.target.value
setNewBook(temNewBook)

}

const addBook = (event)=>{
  event.preventDefault()
    // if (!newBook.title || !newBook.image || !newBook.author || !newBook.rating || !newBook.year) {
    // alert("Please fill in all the fields");}

  axios.post("https://book-library-be-z5om.onrender.com/create",newBook)
  .then(res=>{console.log(res.data);
    getBooks()
     setNewBook({
        title: '',
        author: '',
        year: '',
        image: '',
        rating: '',
      });
  }).catch(err=>{
   alert(err.response.data.error);
    console.log(err.response.data.error.message);
    

  })
}
  return (
    <Container>
      
      <form onSubmit={addBook}>
                <input type='text' name='title' id='title' placeholder='title'onChange = {bookInput} value={newBook.title}/> <br />
             <input type='number' name='rating' id='rating' placeholder='rating' max={5}onChange = {bookInput} value={newBook.rating}/> <br />
                 <input type='text' name='author' id='author' placeholder='author'onChange = {bookInput} value={newBook.author}/> <br />
        <input type='number' name='year' id='year' placeholder='year' onChange = {bookInput} value={newBook.year}/> <br />
        <input type='text' name='image' id='image' placeholder='image'onChange = {bookInput} value={newBook.image}/> <br />
                <input type='submit' className='btn btn-success' value="add" /> 
               </form>
               <br />
        

<h1>books</h1>

<Row className='g-4'>
{books.map((books, index) => {
    return (
        <Col xs={12} sm={6} md={4} lg={3} key={index} className='g-5' >
        <BookCard books={books} index={index}/>
        </Col>
    );
})}


</Row>



    </Container>
  )
}

export default BookLibrary
