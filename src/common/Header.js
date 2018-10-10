import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from "prop-types"

const Header = () => {
    const activeStyle = { color: 'blue' };
    return (
      <nav>
        <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>
        {" | "}
        <NavLink to="/top" activeStyle={activeStyle}>Top Stories</NavLink>
        {" | "}
        <NavLink to="/new" activeStyle={activeStyle}>New</NavLink>
      </nav>
    );
  };
  
export default Header
