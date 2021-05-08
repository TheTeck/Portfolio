import React from 'react';
import { Icon, Popup } from 'semantic-ui-react';
import './Project.css';

export default function Project ({ title, description, link, link2, image, onHeroku }) {

    return (
        <div id="grid-container">
            <div id="image-container">
                <img src={image} alt="Screenshot of project" />
            </div>
            <div id="description-container">
                <h2>{title}</h2>
                <p>{description}</p>
                <div id="project-links">
                    <Popup
                        trigger={<a href={link} rel="noreferrer" target="_blank"><Icon name="github" color="violet" size="huge"></Icon></a>}
                        content="Github Repository"
                        position="bottom center"
                    />
                    { onHeroku ?
                        <Popup
                            trigger={<a href={link2} rel="noreferrer" target="_blank"><img src="images/heroku.png" alt="Heroku Icon" /></a>}
                            content="Deployed App"
                            position="bottom center"
                        />
                        :
                        <Popup
                            trigger={<a href={link2} rel="noreferrer" target="_blank"><Icon name="github alternate" color="violet" size="huge"></Icon></a>}
                            content="Deployed App"
                            position="bottom center"
                        />
                    }
                </div>
            </div>
        </div>
    )
}