import React from 'react';
import './css/Navbar.css';
import Logo from './Logo';
import NavItem from './NavItem';


function Navbar(props) {
    const navItems = [
        "gallery",
        "inspiration",
        "challenge"
    ]
    const navComponents = navItems.map((name)=>{
       return <NavItem name={name} active={props.activePage===name}/>
    }
    )
    return (
        <div className="navbar">
            <Logo/>
            {navComponents}
        </div>
    )
}

export default Navbar;
