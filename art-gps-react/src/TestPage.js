import React from 'react';
import Navbar from './Navbar';
import TestPics from './TestPics';
import './css/TestPage.css';
import './css/NavItem.css';


export default function TestPage() {
    return (
        <div>
            <Navbar activePage="quiz"/>
            <TestPics />
        </div>
    )
}
