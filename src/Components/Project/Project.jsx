import React, { useState } from 'react';
import './Project.css';

export default function Project({ images }) {

    const [imageIndex, setImageIndex] = useState(0);
    const bgImage = 'guitar.jpeg';

    return (
        <>
            <div className="image-container">
                <div className="project-img" style={{ backgroundImage: `url(${images[imageIndex]})`}}></div>
            </div>
            <div className="reflection-container">
                <div className="reflection-img" style={{ backgroundImage: `url(${images[imageIndex]})`}}>
                    <div className="reflection-effects"></div>
                </div>
            </div>
        </>
    )
}