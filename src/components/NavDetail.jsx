import React,{useContext} from 'react';
import {FaHome} from 'react-icons/fa';
import { LanguageContext } from './Languagecontext/LanguageContext';


export default function NavDetail(){

    const {english,setSpanishLanguage, setEnglishLanguage} = useContext(LanguageContext)

    return (
        <>
        <nav className='menu-detail'>
            <ul>
                <a href='/' rel="noreferrer"><li><FaHome/></li></a>
            </ul>
            <ul className='languages'>
                <li onClick={setEnglishLanguage} className={english ? 'englishOn' : 'englishOff'}>EN</li>
                <li>/</li>
                <li onClick={setSpanishLanguage} className={english ? 'englishOff' : 'englishOn'} >ES</li>
            </ul>
        </nav>
        </>
    ) 
   
}