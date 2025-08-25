import React, { Component } from "react";
import Cockpit from "../components/Cockpit/Cockpit";
import Persons from "../components/Persons/Persons";
import style from "./App.module.css";

class App extends Component
{
  constructor(props)
  {
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    persons: [
      { id: "98745", name: "Ben", age: 37 },
      { id: "32459", name: "John", age: 42 },
      { id: "97854", name: "Rita", age: 12 },
    ],
    showPersons: false,
    showCockpit: true,
  };

  static getDerivedStateFromProps(props, state)
  {
    console.log("[Apps.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount()
  {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState)
  {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate()
  {
    console.log("[App.js] componentDidUpdate");
  }

  handleDeletePerson = (index) =>
  {
    //Create a copy of the state array otherwise since persons is a pointer it will modify the state and this is not something you want to do. Therefor, using the .slice() method or the spread operator [...array]
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  handleOnChangeName = (event, id) =>
  {
    const personIndex = this.state.persons.findIndex((p) =>
    {
      return p.id === id;
    });

    const tempPerson = { ...this.state.persons[personIndex] };

    tempPerson.name = event.target.value;

    const tempPersons = [...this.state.persons];
    tempPersons[personIndex] = tempPerson;

    this.setState({ persons: tempPersons });
  };

  handleTogglePersons = () =>
  {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render()
  {
    console.log("[App.js] render");

    let persons = null;

    if (this.state.showPersons)
    {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.handleDeletePerson}
          changed={this.handleOnChangeName}
        />
      );
    }

    return (
      <div className={style.App}>
        <button
          onClick={() =>
          {
            this.setState({ showCockpit: false });
          }}
        >
          Remove cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            appTitle={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.handleTogglePersons}
          />
        ) : null}
        {persons}
      </div>
    );
  }
}

export default App;
