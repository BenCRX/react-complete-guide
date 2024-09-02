import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Ben", age: 37 },
      { name: "John", age: 42 },
      { name: "Rita", age: 12 },
    ],
    showPersons: false,
  };

  handleModifyPersons = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 48 },
        { name: "Johnathan", age: 49 },
        { name: "Ritamitsouko", age: 50 },
      ],
    });
  };

  handleOnChangeName = (event) => {
    this.setState({
      persons: [
        { name: "Ben", age: 37 },
        { name: event.target.value, age: 42 },
        { name: "Rita", age: 12 },
      ],
    });
  };

  handleTogglePersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid buildQueries",
      padding: "8px",
      cursor: "pointer",
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App Again</h1>

        <button style={style} onClick={this.handleTogglePersons}>
          Show persons
        </button>

        {this.state.showPersons ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />

            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              onClick={this.handleModifyPersons.bind(this, "Johnny")}
              onChange={this.handleOnChangeName}
            />

            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
