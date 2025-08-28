import React, { Component } from "react";
import Cockpit from "../components/Cockpit/Cockpit";
import Persons from "../components/Persons/Persons";
import style from "./App.module.css";
import withClass from "../hoc/withClass";
import AuthContext from "../context/auth-context";

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
    changeCounter: 0,
    authenticated: false,
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

    //This is the optimal way to update a sate whenever a state update depends on the old state
    this.setState((prevState, props) =>
    {
      return {
        persons: tempPersons,
        changeCounter: prevState.changeCounter + 1,
      };
    });
  };

  handleTogglePersons = () =>
  {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  handleAuthentication = () =>
  {
    this.setState({ authenticated: true });
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
          isAuthenticated={this.state.authenticated}
        />
      );
    }

    // AuthContext Providers and Consumers are a way to pass data through specific components without having to pass that data through each component in the line. In this example with pass data to the Person component without passing that data through the Persons component
    return (
      <div>
        <button
          onClick={() =>
          {
            this.setState({ showCockpit: false });
          }}
        >
          Remove cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            authentication: this.handleAuthentication,
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              appTitle={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.handleTogglePersons}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </div>
    );
  }
}

//Maybe not the best example here but that would be another way to create and use a HOC, but most of the time when it's for style or stuff related to the JSX itself, you are probably better off with the previous version of the HOC (with a wrapping component). This will mostly be used in cases where you need some code to run in the backend maybe ?
export default withClass(App, style.App);
