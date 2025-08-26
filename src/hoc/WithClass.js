import React from "react";

const WithClass = (props) =>
{
    return (<div className={props.style}>{props.children}</div>);
};

export default WithClass;
