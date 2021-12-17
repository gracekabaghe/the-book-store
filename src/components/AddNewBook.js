/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/books/books';

const AddNewBook = () => {
  const [inputValues, setInputValues] = useState({
    title: '',
    id: '',
    category: '',
  });
  const dispatch = useDispatch();
  const [errorMsg, setError] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const { title, category } = inputValues;
    const newBook = {
      id,
      title,
      category,
    };

    if (newBook.title.trim().length === 0) {
      setError('Please add Book title');
      setInputValues(newBook);
    } else if (newBook.category === '') {
      setError('Please select the category');
      setInputValues(newBook);
    } else {
      setError('');
      dispatch(postBook(newBook));
      setInputValues({
        title: '',
        id: '',
        category: '',
      });
      document.querySelector('.add-book-section').reset();
    }
  };

  const onChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="hr" />
      <form className="add-book-container d_flex" onSubmit={submitBookToStore}>
        <h1>ADD NEW BOOK</h1>
        <div className="add-book d_flex">
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={onChange}
            required
          />
          <select name="category" onChange={onChange} required>
            <option value="" hidden>Category</option>
            <option value="Children">Children</option>
            <option value="Fiction">Fiction</option>
            <option value="Biography">Biography</option>
            <option value="Religion">Religion</option>
          </select>
          <button className="Add-Book-btn" type="submit" onClick={submitBookToStore}>Add A Book</button>
        </div>
        <small>{errorMsg}</small>
      </form>
    </>
  );
};

export default AddNewBook;
