import React from 'react';
import './Navigation.css';
import { Header } from 'semantic-ui-react';

export default function Navigation() {
    return (
        <div id="nav-container">
            <Header as='h3'>About Me</Header>
            <Header as='h3'>Technical Skills</Header>
            <Header as='h3'>Projects</Header>
            <Header as='h3'>Resume</Header>
            <Header as='h3'>Contact</Header>
        </div>
    )
}