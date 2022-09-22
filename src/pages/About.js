import React from 'react';
import './About.css';


function About() {
    return (
        <div className="about">
            <div className="about__flexContainer">
                <img className='about__image' src="massonOleary.jpeg" alt="masson holding a guitar" />
                <div className="about__bio">
                    <p>Masson LeMieux, born in Baton Rouge, LA, is a musician (guitar), educator, and builder/maker of things, based in Manhattan, New York. Since completing his Masters in Music at Louisiana State University, he has been working as a performer, sound engineer, producer. He often collaborates with Yiseul LeMieux as a performer and engineer, producing many interactive and large scale works.  Masson uses functional art and technology, including computer programming, web development, and programming microcontrollers, to augment the scope of music performance. </p>
                </div>
            </div>
        </div>
    )
}

export default About
