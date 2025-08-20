import React, { useEffect } from "react";
import style from "./Cockpit.module.css";

const Cockpit = (props) =>
{

  // the functional component version of componentDidMount and componentDidUpdate in one method only
  useEffect(() => 
  {
    console.log('[Cockpit.js] useEffect');
    setTimeout(() => alert('saved data'), 1000);

    // adding a return to the function is kind of the equivalent of componentWillUnmount for a functional component
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  }, [props.persons]); // the useEffect function accept an array as the second argument. Updates of the elements of the array will be checked and the useEffect function will be called when there is a change. This is the equivalent of componentDidUpdate in a functional component. Empty array will be like using componentDidMount.

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
