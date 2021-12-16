import { createSlice, current } from '@reduxjs/toolkit';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const apiKey = 'av9kWU1C4HkPZEQJTJP0';

const appUrl = `${baseUrl}/apps/${apiKey}/books`;

const bookSlice = createSlice(
  {
    name: 'books',
    initialState: [],
    reducers: {
      addBook: (state, action) => [...current(state), { ...action.payload }],
      removeBook: (state, action) => current(state).filter((a) => a.item_id !== action.payload),
      fetchBooks: (_state, action) => action.payload,
    },
  },
);

const fetchBooks = async (dispatch) => {
  const response = await fetch(appUrl);
  const books = await response.json();
  const bookList = Object.entries(books).map(([id, [book]]) => (
    {
      item_id: id,
      title: book.title,
      category: book.category,
    }
  ));
  dispatch({ type: 'books/fetchBooks', payload: bookList });
};

const addBooktoStore = (book) => {
  const addBookThunk = async (dispatch) => {
    const res = await fetch(appUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });
    const msg = res;
    if (msg.status) {
      dispatch({ type: 'books/addBook', payload: book });
    }
  };
  return addBookThunk;
};

const deleteBook = (id) => {
  const delBookThunk = async (dispatch) => {
    const res = await fetch(`${appUrl}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const msg = res;
    if (msg.status) {
      dispatch({ type: 'books/removeBook', payload: id });
    }
  };
  return delBookThunk;
};

export { addBooktoStore, deleteBook, fetchBooks };
export default bookSlice.reducer;
