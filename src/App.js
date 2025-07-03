import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "98745", name: "Ben", age: 37 },
      { id: "32459", name: "John", age: 42 },
      { id: "97854", name: "Rita", age: 12 },
    ],
    showPersons: false,
  };

  handleDeletePerson = (index) => {
    //Create a copy of the state array otherwise since persons is a pointer it will modify the state and this is not something you want to do. Therefor, using the .slice() method or the spread operator [...array]
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  handleOnChangeName = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const tempPerson = { ...this.state.persons[personIndex] };

    tempPerson.name = event.target.value;

    const tempPersons = [...this.state.persons];
    tempPersons[personIndex] = tempPerson;

    this.setState({ persons: tempPersons });
  };

  handleTogglePersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      },
    };

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                onClick={() => this.handleDeletePerson(index)}
                onChange={(event) => this.handleOnChangeName(event, person.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = "Red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black",
      };
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App Again</h1>
        <p className={classes.join(" ")}>This is working !</p>

        <button style={style} onClick={this.handleTogglePersons}>
          Show persons
        </button>

        {persons}
      </div>
    );
  }
}

export default App;
