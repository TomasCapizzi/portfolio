import React from 'react';
import {HiMenuAlt3} from 'react-icons/hi'
import {FaHome} from 'react-icons/fa'

export default function Navbar(){

    function dropMenu(){        
        const menuHamb = document.getElementById('menu-hamb')
        menuHamb.classList.toggle('on')
    }

    return (
        <>
        <nav className='menu'>
            <ul>
                <a href='/' rel="noreferrer"><li><FaHome/></li></a>
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
        <nav className='menu-hamb'>
            <a href='/' rel="noreferrer"><FaHome/></a>
            <button onClick={dropMenu}><HiMenuAlt3/></button>
            <div className='hamb-links' id='menu-hamb'>
                <ul>
                    <a href="#about-me" rel="noreferrer"><li>About Me</li></a>
                    <a href="#projects" rel="noreferrer"><li>Projects</li></a>
                    <a href="#contact" rel="noreferrer"><li>Contact</li></a>
                </ul>
                <div>
                    <button>EN</button>
                    <button>ES</button>
                </div>
            </div>
        </nav>
        </>
    ) 
   
}