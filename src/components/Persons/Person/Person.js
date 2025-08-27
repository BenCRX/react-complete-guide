import React, { Component } from "react";
import style from "./Person.module.css";
import withClass from "../../../hoc/withClass";
import Auxiliary from "../../../hoc/Auxiliary";
import PropTypes from "prop-types";

class Person extends Component
{
  // This is the modern way to use Refs in order to catch specific elements in order to "do" something with them. The examples are quite stupide but in this case we are focusing on the input of the last element (person) created. The older way is with the ref={(inputEl) =>{this.inputElement = inputEl;}} commented below
  constructor(props)
  {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount()
  {
    //this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render()
  {
    console.log("[Person.js] rendering...");

    // You should usually have a parent element when you return some JSX but alternatively you can use React.Fragment instead of the Auxiliary HOC we created earlier to do the job (and instead of a div)
    return (
      <Auxiliary>
        <p key="i1" onClick={this.props.onClick}>
          I'm {this.props.name} and I am {this.props.age} years old
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          //ref={(inputEl) =>{this.inputElement = inputEl;}}
          ref={this.inputElementRef}
          key="i3"
          type="text"
          onChange={this.props.onChange}
          value={this.props.name}
        />
      </Auxiliary>
    );
  }
}

//This is useful when working with a team to ensure that the types of the props are the correct one, otherwise you'll have a warning on the console
Person.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  onChange: PropTypes.func,
};

export default withClass(Person, style.Person);
