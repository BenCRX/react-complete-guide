import React from "react";

//This {...props} syntax with the spread operator allows us to forwards all the props the component embeded within the withClass functionn has.
const withClass = (WrappedComponent, className) =>
{
    return (props) => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    );
};

export default withClass;
