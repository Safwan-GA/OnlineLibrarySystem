import React from 'react';
import { Link } from 'react-router-dom';
import { dummyBooks } from '../data/books';

const categories = ['All','Fiction', 'Non-Fiction', 'Sci-Fi', 'Biography'];

const Home = () => {
  const popularBooks = dummyBooks.slice(0, 3); // first 3 as popular

  return (
    <div>
      <h1>Welcome to the Online Library System</h1>

      <section>
        <h2>Book Categories</h2>
        <ul>
          {categories.map(cat => (
            <li key={cat}>
              <Link to={`/books/${cat}`}>{cat}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Popular Books</h2>
        <ul>
          {popularBooks.map(book => (
            <li key={book.id}>
              <Link to={`/book/${book.id}`}>{book.title}</Link> by {book.author}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
