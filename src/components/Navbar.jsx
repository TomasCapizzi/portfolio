import React from 'react';

export default function Navbar(){

    return (
        <nav className='menu'>
            <ul>
                <a href='/' rel="noreferrer"><li>Home</li></a>
                <a href="#about-me" rel="noreferrer"><li>About Me</li></a>
                <a href="#projects" rel="noreferrer"><li>Projects</li></a>
                <a href="#contact" rel="noreferrer"><li>Contact</li></a>
            </ul>
            <ul className='languages'>
                <li>EN</li>
                <li>/</li>
                <li>ES</li>
            </ul>
        </nav>
    ) 
   
}