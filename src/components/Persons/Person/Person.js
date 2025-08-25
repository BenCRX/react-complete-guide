import React, { Component } from "react";
import style from "./Person.module.css";

class Person extends Component
{
  render()
  {
    console.log("[Person.js] rendering...");

    // You should usually have a parent element when you return some JSX but it is possible to return an array as long as elements of the array have a proper key
    return [
      <p key="i1" onClick={this.props.onClick}>I'm {this.props.name} and I am {this.props.age} years old</p>,
      <p key="i2">{this.props.children}</p>,
      <input
        key="i3"
        type="text"
        onChange={this.props.onChange}
        value={this.props.name}
      />,
    ];
  }
}

export default Person;
