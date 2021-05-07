import React from 'react';
import { Icon, Popup } from 'semantic-ui-react';
import './Project.css';

export default function Project ({ title, description, link, image }) {

    return (
        <div id="grid-container">
            <div id="image-container">
                <img src={image} alt="Screenshot of project" />
            </div>
            <div id="description-container">
                <h2>{title}</h2>
                <p>{description}</p>
                <Popup
                    trigger={<a href={link}><Icon name="github" color="violet" size="big"></Icon></a>}
                    content="Github Repository"
                    position="bottom center"
                />
            </div>
        </div>
    )
}