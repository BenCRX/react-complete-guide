import React from "react";

const AuthContext = React.createContext({
    authenticated: false,
    authentication: () => { }
});

export default AuthContext;
