import React from 'react';
import './About.css';

export default function About () {
    return (
        <div id="about-container">
            <img id="my-img" src="images/johnteckemeyer.jpg" alt="Headshot of John Teckemeyer" />
            <div id="about-name-title">
                <p id="my-name">John Teckemeyer</p>
                <p id="my-title">Full-Stack Web Developer</p>
            </div>
            <p id="my-brand">
                I am a developer out of the San Francisco bay area - determined to bring unique experiences
                for users through out-of-the-box solutions. With a  background in music composition and 
                luthiery, I can't help but to strive to implement as much artistry in my projects as I can.
            </p>
        </div>
    )
}