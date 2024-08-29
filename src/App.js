import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component
{
  state = 
  {
    persons: 
    [
      {name: "Ben", age: 37},
      {name: "John", age: 42},
      {name: "Rita", age: 12},
      {name: "Mitsouko", age: 87}
    ]
  };

  handleSwitchName = () => 
  {
    this.setState
    (
      {
        persons: 
        [
          {name: "Benoit", age: 48},
          {name: "Johnathan", age: 49},
          {name: "Ritamitsouko", age: 50},
          {name: "Mitsoukokokokokoko", age: 51}
        ]
      }
    );
  };

  render()
  {
    return (
      <div className="App">
        <h1>Hi, I'm a React App Again</h1>
        <button onClick={this.handleSwitchName}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />
      </div>
    );
  }
}

export default App;
