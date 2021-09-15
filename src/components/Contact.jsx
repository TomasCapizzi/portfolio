import React from 'react';
import {IoMail} from 'react-icons/io5'
import {AiOutlineWhatsApp, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';

export default function Contact(){

    return (
        <div className='contact'>
            <h3 id='contact'>Contact</h3>
            <p>If my profile adjusts to what you´re looking for, or some of my projects are of your interest, i´m open to feedback and profesional proposals. ¡Don't doubt on contacting me!</p>
            <ul className='contact-icons'>
                <li><a href="https://www.linkedin.com/in/tomas-capizzi/" target="_blank" rel="noreferrer" alt="Linkedin Tomas Capizzi"><AiFillLinkedin/></a></li>
                <li><a href="https://github.com/TomasCapizzi" target="_blank" rel="noreferrer"><AiFillGithub/></a></li>
                <li><a href="mailto:tomas.capizzi@hotmail.com" target="_blank" rel="noreferrer"><IoMail/></a></li>
                <li><a href="https://wa.link/sssxh3" target="_blank" rel="noreferrer"><AiOutlineWhatsApp/></a></li>
            </ul>
        </div>
    )
}