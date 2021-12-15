import React, { Component } from 'react';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './components/Home';
import Categories from './redux/Categories';
import Navbar from './components/Navbar';
import AddNewBook from './components/AddNewBook';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/AddNewBook">
            <AddNewBook />
          </Route>
          <Route path="/Categories">
            <Categories />
          </Route>
          <Route path="*">
            <Home to="/" />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

// import './App.css';
// import AddNewBook from './components/AddNewBook';

// function App() {
//   return (
//     <div className="App">
//       <h1>The Bookstore</h1>
//       <AddNewBook />
//     </div>
//   );
// }

// export default App;
