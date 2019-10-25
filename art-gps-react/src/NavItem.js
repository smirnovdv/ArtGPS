import React from 'react';
import './css/NavItem.css';
const Link = require("react-router-dom").Link;


function NavItem(props) {
    return (
        <Link to={props.name}>
            <div className="navitem">
                <p>{props.name}</p>
            </div>
        </Link>
    )
  }

export default NavItem;