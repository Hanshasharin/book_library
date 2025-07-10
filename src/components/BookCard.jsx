import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BookCard = (props) => {
   const navigate = useNavigate();
const[show,setShow] = useState(false)
const [rating,setRating] = useState(props.books.rating)
  const handleShow = ()=>{
    // alert("clicked" + props.movie.movieName)
    setShow(true)
    console.log(show);
    
  }
const handleClose = ()=>{
    // alert("close clicked")
    setShow(false)
  }
  const submitRating=()=>{
 const token = localStorage.getItem("access_token")

   if (!token || token === "null") {
      alert("Please log in to rate books.");
      navigate("/login"); // ✅ redirect to login page
      return;
    }


 const header =  {
   "Authorization" : `Bearer ${token}`
 }

axios.put('https://book-library-be-z5om.onrender.com/rating', { rating : rating , id:props.books._id},
   {headers:header}) 
    .then(res => {
      console.log("Server response:", res.data);
          axios('https://book-library-be-z5om.onrender.com/books')
      handleClose()
    })
    .catch(err => {
      console.error("POST error:", err);
    });
  
  }
const ratingChange=(event)=>{
setRating(event.target.value)

  }

  
  const deleteBook = () => {
  alert("delete");
  axios.delete("https://book-library-be-z5om.onrender.com/delete?id=" + props.books._id)
    .then(res => {
      console.log(res.data);
            window.location.reload(); // 🔄 simple reload to refresh book list

    })
    .catch(err => {
      console.error(err);
    });
}

  return (
    <>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.books.image}  style={{ width: "100%", height: "250px", objectFit: "cover" }} />
      <Card.Body>
        <Card.Title>
          <Link to = {"/books/"+props.books._id}>
          {props.books.title}
          </Link>
          </Card.Title>
        <Card.Text>
          {props.books.author}
        </Card.Text>
      
        
         <Button variant="primary me-3" onClick={handleShow}>
        add rating
      </Button>
        <Button variant="danger" onClick={deleteBook}>
        delete
      </Button>
      
      </Card.Body>
    </Card>
 <Modal show={show} onHide={handleClose}>
  
        <Modal.Header>

          <div style={{flex:1}}>

            <img src={props.books.image} style={{width:"100%" , height:"250px" , objectFit:"contain"}}/>

          <Modal.Title style={{textAlign:"center"}}>{props.books.title}</Modal.Title>
          </div>
         
        </Modal.Header>
        <Modal.Body>{props.books.author}
          <div>
          <input type="number" max={5} min={1} value={rating} onChange={ratingChange} />
          <button onClick={submitRating}>submit</button>
          <p>{rating}</p>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
    </>

   

    
  )
}

export default BookCard
