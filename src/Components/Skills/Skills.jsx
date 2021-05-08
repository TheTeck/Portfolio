import React from 'react';
import './Skills.css';

export default function Skills () {

    const theSkills = [
        ['images/javascript.png', 'Javascript'],
        ['images/python.png', 'Python'],
        ['images/html.png', 'HTML'],
        ['images/css.png', 'CSS'],
        ['images/git.png', 'GIT'],
        ['images/github.png', 'GitHub'], 
        ['images/ajax.png', 'AJAX'],
        ['images/react.png', 'React'],
        ['images/reactrouter.png', 'React Router'],
        ['images/nodejs.png', 'Node.js'],
        ['images/express.png', 'Express.js'],
        ['images/django.png', 'Django'],
        ['images/mongodb.png', 'MongoDB'],
        ['images/postgresql.png', 'PostgreSQL'],
        ['images/mongoose.png', 'Mongoose.js'],
        ['images/semanticui.png', 'Semantic UI'],
        ['images/materialize.png', 'Materialize'],
        ['images/ejs.png', 'EJS'],
        ['images/jsx.png', 'JSX'],
        ['images/oauth.png', 'OAuth'],
        ['images/passport.png', 'Passport.js'],
        ['images/jwt.png', 'JWT'],
        ['images/aws.png', 'AWS'],
        ['images/atlas.png', 'Atlas']
    ]

    return (
        <div id="skill-container">
                {
                    theSkills.map(skill => {
                        return (
                            <div className="icon-container">
                                <img className="icon-img" src={skill[0]} alt="Icon for this skill" />
                                <h4 className="icon-title">{skill[1]}</h4>
                            </div>
                        )
                    })
                }
        </div>
    )
}