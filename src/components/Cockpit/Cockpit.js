import React, { useEffect, useRef } from "react";
import style from "./Cockpit.module.css";

const Cockpit = (props) =>
{
  // This is how you use ref in functionnal components. You need to import useRef.
  const toggleBtnRef = useRef(null);

  // the functional component version of componentDidMount and componentDidUpdate in one method only
  useEffect(() =>
  {
    console.log("[Cockpit.js] useEffect");
    toggleBtnRef.current.click();
    //setTimeout(() => alert("saved data"), 1000);

    // adding a return to the function is kind of the equivalent of componentWillUnmount for a functional component
    return () =>
    {
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, [props.persons]); // the useEffect function accept an array as the second argument. Updates of the elements of the array will be checked and the useEffect function will be called when there is a change. This is the equivalent of componentDidUpdate in a functional component. Empty array will be like using componentDidMount.

  const modifiedClasses = [];
  let btnStyle = "";

  if (props.showPersons)
  {
    btnStyle = style.Red;
  }

  if (props.personsLength <= 2)
  {
    modifiedClasses.push(style.redText);
  }

  if (props.personsLength <= 1)
  {
    modifiedClasses.push(style.boldText);
  }

  return (
    <div className={style.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={modifiedClasses.join(" ")}>This is working !</p>

      <button ref={toggleBtnRef} className={btnStyle} onClick={props.clicked}>
        Show persons
      </button>
    </div>
  );
};

// React.memo() is the functionnal component version of shouldComponentUpdate
export default React.memo(Cockpit);
