import React from 'react';
import {AiFillHtml5, AiFillGithub} from 'react-icons/ai';
import {SiJavascript} from 'react-icons/si';
import {FaReact, FaSass, FaCss3Alt, FaWordpress} from 'react-icons/fa';
import {SiAdobepremiere, SiAdobeaftereffects, SiAdobeillustrator, SiAdobephotoshop} from 'react-icons/si';



export default function Description(){

    return(
        <div className='about-me'>
            <h1 id='about-me'>Tomas Capizzi</h1>
            <div className='info'>
                <div>
                    <img src="./img/115.jpg" alt="profile" />
                </div>
                <p>Hi! Mi name is Tomas Capizzi, i´m a digital producer and currently i´m focusing on Front-End development, with knowledge´s on Javascript, Html, CSS and React.

                This past months i decided to focus my free time on learning something that has been interesting me for a while, and i had taken a few courses a couple of years before, that is the web development
                Complementing this knowledge with the career where i´m currently doing the last subjects, the degree on Digital Arts focused on Audiovisual.</p>
            </div>
<ul>
    <li><AiFillHtml5/></li>
    <li><FaCss3Alt/></li>
    <li><SiJavascript/></li>
    <li><FaReact/></li>
    <li><FaSass/></li>
    <li><AiFillGithub/></li>
    <li><FaWordpress/></li>
    <li><SiAdobepremiere/></li>
    <li><SiAdobeaftereffects/></li>
    <li><SiAdobeillustrator/></li>
    <li><SiAdobephotoshop/></li>
</ul>
        </div>
    )
}