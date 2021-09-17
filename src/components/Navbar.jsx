import React,{useContext} from 'react';
import {HiMenuAlt3} from 'react-icons/hi'
import {FaHome} from 'react-icons/fa'
import { LanguageContext } from './Languagecontext/LanguageContext';



export default function Navbar(){

    const {english,setSpanishLanguage, setEnglishLanguage} = useContext(LanguageContext)

    function dropMenu(){        
        const menuHamb = document.getElementById('menu-hamb')
        menuHamb.classList.toggle('on')
    }

    return (
        <>
        <nav className='menu'>
            <ul>
                <a href='/' rel="noreferrer"><li><FaHome/></li></a>
                <a href="#about-me" rel="noreferrer"><li>{english ? 'About Me' : '¿Quién Soy?'}</li></a>
                <a href="#projects" rel="noreferrer"><li>{english ? 'Projects' : 'Proyectos'}</li></a>
                <a href="#contact" rel="noreferrer"><li>{english ? 'Contact' : 'Contacto'}</li></a>
            </ul>
            <ul className='languages'>
                <li onClick={setEnglishLanguage}  className={english? 'englishOn' : 'englishOff'}>EN</li>
                <li>/</li>
                <li onClick={setSpanishLanguage}  className={english? 'englishOff' : 'englishOn'}>ES</li>
            </ul>
        </nav>
        <nav className='menu-hamb'>
            <a href='/' rel="noreferrer"><FaHome/></a>
            <button onClick={dropMenu}><HiMenuAlt3/></button>
            <div className='hamb-links' id='menu-hamb'>
                <ul>
                    <a href="#about-me" rel="noreferrer"><li>{english ? 'About Me' : '¿Quién Soy?'}</li></a>
                    <a href="#projects" rel="noreferrer"><li>{english ? 'Projects' : 'Proyectos'}</li></a>
                    <a href="#contact" rel="noreferrer"><li>{english ? 'Contact' : 'Contacto'}</li></a>
                </ul>
                <div>
                    <button  onClick={setEnglishLanguage}>EN</button>
                    <button onClick={setSpanishLanguage}>ES</button>
                </div>
            </div>
        </nav>
        </>
    ) 
   
}