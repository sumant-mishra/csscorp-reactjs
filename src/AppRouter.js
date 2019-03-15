import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Main from './Main';
import axios from 'axios';

import Home from './Home';
import About from './About';

class App extends Component {

  constructor()
  {
    super()

    this.state = {
      movies : []
    }
  }

  onClickHandler()
  {
    
  }

  componentDidMount(){
    axios.get("https://s3.amazonaws.com/jquerytestcsscorp/movies-in-theaters.json").then((response) => {
      //console.log(response);
      this.setState({
        movies : response.data
      })
    })
}

  render() {
    return (
      <div className="App">
        <Router>
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
      
              <hr />
              
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
