import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BooksPage from './BookPage';
import CategoryPage from './CategoryPage';
import Navbar from './Navbar';
import '../index.css';

const Bookstore = () => (
  <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<BooksPage />} />
      <Route path="/categories" element={<CategoryPage />} />
    </Routes>
  </>
);

export default Bookstore;
