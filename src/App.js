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
      movies : [],
      selectedMovieName: ""
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

btnClickHandler(item){
  console.log("btn click from Main Component");

  this.setState({
    selectedMovieName: item.title
  })

}

  render() {
    return (
      <div className="App">
        <input type="button" value="Click to load JSON" onClick={this.onClickHandler.bind(this)}/> {this.state.selectedMovieName}
        <Main propsVal={10} movies={this.state.movies} btnClickHandler={this.btnClickHandler.bind(this)}/>
      </div>
    );
  }
}

export default App;
