
import { Component } from 'react';
import './App.css';

import { Cardlist } from './components/card-list';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      robots:[]
    }
  }
  //render iin daraa ajildag class component func 
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then( Response => Response.json())
      .then( data => this.setState( { robots: data} ));

  }


  render() {
    //console.log(this.state.robots)
    return (
      <div className="App">
        <h1> Robots search </h1>
        <Cardlist robots={this.state.robots} />
      </div>
    );
  }
}
