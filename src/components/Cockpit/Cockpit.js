import React, { useEffect } from "react";
import style from "./Cockpit.module.css";

const Cockpit = (props) =>
{

  // the functionnal component version of componentDidMount and componentDidUpdate in one method only
  useEffect(() => {console.log('[Cockpit.js] useEffect')});

  const modifiedClasses = [];
  let btnStyle = "";

  if (props.showPersons)
  {
    btnStyle = style.Red;
  }

  if (props.persons.length <= 2)
  {
    modifiedClasses.push(style.redText);
  }

  if (props.persons.length <= 1)
  {
    modifiedClasses.push(style.boldText);
  }

  return (
    <div className={style.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={modifiedClasses.join(" ")}>This is working !</p>

      <button className={btnStyle} onClick={props.clicked}>
        Show persons
      </button>
    </div>
  );
};

export default Cockpit;
