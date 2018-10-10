import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    const activeStyle = { color: 'blue' };
    return (
      <nav>
        <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>
        {" | "}
        <NavLink to="/best" activeStyle={activeStyle}>Best</NavLink>
        {" | "}
        <NavLink to="/new" activeStyle={activeStyle}>New</NavLink>
      </nav>
    );
  };
  
export default Header
