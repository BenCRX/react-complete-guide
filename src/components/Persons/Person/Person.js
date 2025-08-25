import React, { Component } from "react";
import Auxiliary from "../../../hoc/Auxiliary";
import style from "./Person.module.css";

class Person extends Component
{
  render()
  {
    console.log("[Person.js] rendering...");

    // You should usually have a parent element when you return some JSX but alternatively you can use an auxiliary HOC that only return its children as props.
    return (
      <Auxiliary>
        <p key="i1" onClick={this.props.onClick}>
          I'm {this.props.name} and I am {this.props.age} years old
        </p>
        ,<p key="i2">{this.props.children}</p>
        <input
          key="i3"
          type="text"
          onChange={this.props.onChange}
          value={this.props.name}
        />
      </Auxiliary>
    );
  }
}

export default Person;
