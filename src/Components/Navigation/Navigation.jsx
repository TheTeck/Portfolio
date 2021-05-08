import React from 'react';
import './Navigation.css';

export default function Navigation() {
    return (
        <div id="nav-container">
            <a href="#about-me"><h3>About Me</h3></a>
            <a href="#technical-skills"><h3>Technical Skills</h3></a>
            <a href="#my-projects"><h3>Projects</h3></a>
            <a href="#resume"><h3>Resume</h3></a>
            <a href="#contact"><h3>Contact</h3></a>
        </div>
    )
}