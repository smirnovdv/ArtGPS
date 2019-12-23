import React, { Component } from 'react';
import Navbar from './Navbar';
import TestPics from './TestPics';
import './css/TestPage.css';

export default function TestPage() {
    return (
        <div>
            <Navbar />
            <TestPics />
        </div>
    )
}
