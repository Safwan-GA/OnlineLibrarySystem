import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/bookSlice';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Biography'];

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: categories[0],
    description: '',
    rating: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.title.trim()) errs.title = 'Title is required';
    if (!formData.author.trim()) errs.author = 'Author is required';
    if (!formData.description.trim()) errs.description = 'Description is required';
    if (!formData.rating.trim()) errs.rating = 'Rating is required';
    else if (isNaN(formData.rating) || formData.rating < 0 || formData.rating > 5)
      errs.rating = 'Rating must be a number between 0 and 5';
    return errs;
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    const newBook = {
      id: uuidv4(),
      title: formData.title,
      author: formData.author,
      category: formData.category,
      description: formData.description,
      rating: parseFloat(formData.rating),
    };

    dispatch(addBook(newBook));
    navigate(`/books/${formData.category}`);
  };

  return (
    <div>
      <h1>Add New Book</h1>

      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Title:</label><br />
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}
        </div>

        <div>
          <label>Author:</label><br />
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
          {errors.author && <p style={{ color: 'red' }}>{errors.author}</p>}
        </div>

        <div>
          <label>Category:</label><br />
          <select name="category" value={formData.category} onChange={handleChange}>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Description:</label><br />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
          />
          {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}
        </div>

        <div>
          <label>Rating (0-5):</label><br />
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            step="0.1"
            min="0"
            max="5"
          />
          {errors.rating && <p style={{ color: 'red' }}>{errors.rating}</p>}
        </div>

        <button type="submit" style={{ marginTop: '1rem' }}>Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
