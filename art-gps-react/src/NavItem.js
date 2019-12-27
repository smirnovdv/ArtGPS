import React from 'react';
import './css/NavItem.css';
const Link = require("react-router-dom").Link;


export default function NavItem(props) {
    return (
        <Link to={"/"+props.name}>
            {/* this template literal makes it possible to use more than one className, applies active class to the navItem of the current page */}
            <div className={`navitem ${props.active} ${props.clicked}`}>
                <p>{props.name}</p>
            </div>
        </Link>
    )
};
