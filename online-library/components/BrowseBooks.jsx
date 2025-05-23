import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BrowseBooks = () => {
  const { category } = useParams();
  const books = useSelector(state => state.books);

  const [searchTerm, setSearchTerm] = useState('');

  // Filter books by category & search term (title or author)
  const filteredBooks = books.filter(book => {
    const filterCategory=category.toLowerCase()=='all'?'':category.toLowerCase();
    const matchesCategory = book.category.toLowerCase() === filterCategory;
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <h1>Browse Books - {category}</h1>

      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
      />

      {filteredBooks.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <div className='book-grid'>
          {filteredBooks.map(book => (
            <li key={book.id}>
              <strong>{book.title}</strong> by {book.author} —{' '}
              <Link to={`/book/${book.id}`}>View Details</Link>
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseBooks;
