import React from 'react';
import './css/Navbar.css';
import Logo from './Logo';
import NavItem from './NavItem';


class Navbar extends React.Component {
    constructor(props) {
            super(props);
            this.state = {
                sandwichClicked:false,
                changedSandwich:''
            }
    } 
    navItems = [
        "exploration",
        "gallery",
        "challenge"
    ]


    toggleNav = (e) => {
        this.setState({
            sandwichClicked:!this.state.sandwichClicked,
            changedSandwich:this.state.changedSandwich?"":"crossed"
        })
    }
    
    render() {
        let navComponents = this.navItems.map((name)=>{
            return (<NavItem clicked = {this.state.sandwichClicked?"":"hideNav"}
                             name={name}
                             active={(this.props.activePage===name)?"active":""}/>)
         })
        return (
            <div className="navbar">
                <Logo/>
                <div className = {"sandwich " + this.state.changedSandwich} onClick={this.toggleNav}>
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
                <div className="navItems">
                    {navComponents}
                </div>
            </div>

        )
    }
}

export default Navbar;
