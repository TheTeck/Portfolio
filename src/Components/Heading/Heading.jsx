import React from 'react';
import './Heading.css';

export default function Heading ({ title }) {
    return (
        <h1 className="heading">{title}</h1>
    )
}