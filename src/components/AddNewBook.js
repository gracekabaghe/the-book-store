const AddNewBook = () => (
  <div className="book-content">
    <div className="book-items">
      <div className="bitem">
        <h3>Lord of the Rings</h3>
        <button type="button" className="removebtn">Remove</button>
      </div>
      <div className="bitem">
        <h3>Dragons Den</h3>
        <button type="button" className="removebtn">Remove</button>
      </div>
      <div className="bitem">
        <h3>Bond</h3>
        <button type="button" className="removebtn">Remove</button>
      </div>
    </div>

    <div className="add-book">
      <h4>ADD A BOOK</h4>
      <form>
        <input type="text" />
        <input type="text" />
        <input type="submit" value="Add A Book" />

      </form>
    </div>
  </div>
);
export default AddNewBook;
