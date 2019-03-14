import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main';
import axios from 'axios';

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
        <input type="button" value="Click to load JSON" onClick={this.onClickHandler.bind(this)}/>
        <Main propsVal={10} movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
