import React, { useState, useEffect } from "react";

/**
 * Context here is just our
 * app/component-wide State.
 * What we get back is an object that also contains Component.
 */
const AuthContext = React.createContext({
  isLoggedIn: false,
  /**
   * It is a good idea to also add our functions
   * to the default context when we create one.
   * This works for auto-completion in IDE.
   */
  onLogout: () => {},
  onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

/**
 * We don't need this object here,
 * instead we'll need it in other Components.
 * So we export it, to make it available in other files:
 */
export default AuthContext;
