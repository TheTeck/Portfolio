import React from 'react';
import './Project.css';

export default function Project() {

    const bgImage = 'guitar.jpeg';

    return (
        <>
            <div className="image-container">
                <div className="project-img" style={{ backgroundImage: `url(${bgImage})`}}></div>
            </div>
            <div className="reflection-container">
                <div className="reflection-img" style={{ backgroundImage: `url(${bgImage})`}}>
                    <div className="reflection-effects"></div>
                </div>
            </div>
        </>
    )
}