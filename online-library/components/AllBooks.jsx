import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AllBooks = () => {
  const books = useSelector(state => state.books);

  return (
    <div>
      <h1>All Books</h1>

      {books.length === 0 ? (
        <p>No books available.</p>
      ) : (
        <div className="book-grid">
          {books.map(book => (
            <div className="book-card" key={book.id}>
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Category:</strong> {book.category}</p>
              <p><strong>Rating:</strong> {book.rating}</p>
              <Link to={`/book/${book.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBooks;
