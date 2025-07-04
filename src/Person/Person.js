import React from "react";
import style from "./Person.module.css";

const person = (props) => {
  const rnd = Math.random();
  if (rnd > 0.9) {
    throw new Error("Something went wrong");
  };

  return (
    <div className={style.Person}>
      <p onClick={props.onClick}>
        I'm {props.name} and I am {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.onChange} value={props.name} />
    </div>
  );
};

export default person;
