import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      players: [{}],
    };
  }

  componentDidMount(){
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({...this.state, players: result})
        }
      )
    console.log("Here are the players in state: ", this.state.players); // this doesn't mattermn 
  };

  render(){
    return (
    <div className="App">
      <h1>This is just a placeholder</h1>
      <div>
        {this.state.players.map(i => {
          return(
          <h1>{i.name}</h1>
          )
        })}
      </div>
    </div>
  );}
}

export default App;
