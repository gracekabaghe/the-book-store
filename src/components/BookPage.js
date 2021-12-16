import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import Book from './books';
import { addBooktoStore } from '../redux/books/books';

const BooksPage = () => {
  const dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();
    const title = e.target.querySelector('#title');
    const category = e.target.querySelector('#category');
    const newBook = {
      item_id: uuidv4(),
      title: title.value,
      category: category.value,
    };
    title.value = '';
    category.value = '';
    dispatch(addBooktoStore(newBook));
  };
  const bookList = useSelector((state) => state.books);

  return (
    <div>
      <h2>Reading List</h2>
      <ul>
        {bookList.map((book) => <Book key={book.item_id} book={book} />)}
      </ul>
      <form id="form-addBook" onSubmit={(e) => submitForm(e)}>
        <input id="title" placeholder="Title" />
        <input id="category" placeholder="Author" />
        <button type="submit"> Add New Book </button>
      </form>
    </div>
  );
};

export default BooksPage;
