import React from 'react';

/**
 * Context here is just our app
 * or component-wide State.
 * What we get back is an object that also contains Component.
 */
const AuthContext = React.createContext({
    isLoggedIn: false
}); 


/**
 * We don't need this object here, 
 * instead we'll need it in other Components.
 * So we export it, to make it available in other files:
 */
export default AuthContext;