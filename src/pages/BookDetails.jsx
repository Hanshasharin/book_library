import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`https://book-library-be-z5om.onrender.com/books/${id}`)
      .then(res => {
        setBook(res.data);
      })
      .catch(err => {
        console.error("Error fetching book:", err);
      });
  }, [id]);

  if (!book) return <p>Loading book details...</p>;

  return (
    <div className="container mt-4">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <p><strong>Year:</strong> {book.year}</p>
      <img src={book.image} alt={book.title} style={{ width: "300px", objectFit: "contain" }} />
    </div>
  );
};

export default BookDetails;
