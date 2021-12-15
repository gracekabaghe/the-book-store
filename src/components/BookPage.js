import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import Book from './books';
import { addBook } from '../redux/books/books';

const BooksPage = () => {
  const dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();
    const title = e.target.querySelector('#title');
    const author = e.target.querySelector('#author');
    const newBook = {
      id: uuidv4(),
      title: title.value,
      author: author.value,
    };
    title.value = '';
    author.value = '';
    dispatch(addBook(newBook));
  };
  const bookList = useSelector((state) => state.books);

  return (
    <div>
      <h2>Reading List</h2>
      <ul>
        {bookList.map((book) => <Book key={book.id} book={book} />)}
      </ul>
      <form id="add-book-form" onSubmit={(e) => submitForm(e)}>
        <input id="title" placeholder="Title" />
        <input id="author" placeholder="Author" />
        <button type="submit"> Add New Book </button>
      </form>
    </div>
  );
};

export default BooksPage;
