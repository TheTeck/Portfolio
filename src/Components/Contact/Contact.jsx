import React from 'react';
import { Icon } from 'semantic-ui-react';
import './Contact.css';

export default function Contact () {
    return (
        <div id="contact-container">
            <div>
                <Icon name="mail" size="huge" color="violet"></Icon>
                <p className="contact-text">johnteckemeyer@gmail.com</p>
            </div>
            <div className="margin-above">
                <Icon name="github" size="huge" color="violet"></Icon>
                <a className="contact-link" href="https://github.com/TheTeck" rel="noreferrer" target="_blank">github.com/TheTeck</a>
            </div>
            <div className="margin-above">
                <Icon name="linkedin" size="huge" color="violet"></Icon>
                <a className="contact-link" href="https://www.linkedin.com/in/john-teckemeyer/" rel="noreferrer" target="_blank">linkedin.com/in/john-teckemeyer</a>
            </div>
        </div>
    )
}