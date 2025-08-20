import React, { Component } from "react";
import style from "./Person.module.css";

class Person extends Component
{
  render()
  {
    console.log("[Person.js] rendering...");
    return (
      <div className={style.Person}>
        <p onClick={this.props.onClick}>
          I'm {this.props.name} and I am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.onChange}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
