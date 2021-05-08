import React from 'react';
import { Icon } from 'semantic-ui-react';
import './Resume.css';

export default function Resume () {
    return (
        <div id="resume-container">
            <a href="intro-to-ui.pdf" target="_blank"><Icon name="file pdf"></Icon>View Resume Online</a>
            <a href="intro-to-ui.pdf" download><Icon name="download"></Icon>Download Resume</a>
        </div>
    )
}