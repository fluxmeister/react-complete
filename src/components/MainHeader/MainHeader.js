import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
    </header>
  );
};
// We are forwarding data through the MainHeader to the Navigation component 
// on props we receive in the MainHeader, even though we don't really need the data there
// So, we could easily build "prop chains" which are used to forward data through components 
// to other components.
// It would be nicer if we could use props in a component to only receive the data 
// this component really needs from its parent, 
// and not forward our data through the parent which the parent doesn't even manage 
// nor need itself. 
// And for that we got a component-wide, "behind the scenes", State Storage, built into React.
// We have a concept called React Context and this then allows us to, for example, trigger an action
// in that component-wide State Storage, and then directly pass that to the component 
// that is interested without building such a long prop chain.
export default MainHeader;
