import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const books = useSelector(state => state.books);
  const book = books.find(b => b.id === id);

  if (!book) return <p>Book not found.</p>;

  return (
    <div className='book-card'>
      <h1>{book.title}</h1>
      <p><strong>Author: </strong>{book.author}</p>
      <p><strong>Description: </strong>{book.description}</p>
      <p><strong>Rating: </strong>{book.rating}</p>

      <button onClick={() => navigate(-1)}>Back to Browse</button>
    </div>
  );
};

export default BookDetails;
