import { React } from 'react';
// import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import BooksPage from './components/BookPage';
import CategoriesPage from './components/Categories/Categories';

const App = () => (
  <Router>
    <header>
      <nav>
        <h1>The Bookstore</h1>
        <div className="nav-links">
          <Link to="/">Books</Link>
          <div />
          <Link to="/categories">Categories</Link>
        </div>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<BooksPage />} />
      <Route path="/categories" element={<CategoriesPage />} />
    </Routes>
  </Router>
);

export default App;
