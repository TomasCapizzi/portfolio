import React,{useContext} from 'react';
import { LanguageContext } from './Languagecontext/LanguageContext';
import Wordpress from './ProjectTypes/Wordpress';
import Js from './ProjectTypes/Js';
import Firebase from './ProjectTypes/Firebase';
import TypeReact from './ProjectTypes/TypeReact';


export default function Projects(){

    const {english} = useContext(LanguageContext)
    return (
        <div className='projects'>
            <h3 id='projects'>{english ? 'Projects' : 'Proyectos'}</h3>
            <div className='projects-container'>
                <div className='filter-container'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#293242" fillOpacity="1" d="M0,128L720,192L1440,192L1440,320L720,320L0,320Z"></path></svg>
                    <Firebase/>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#293242" fillOpacity="1" d="M0,128L720,192L1440,192L1440,0L720,0L0,0Z"></path></svg>
                </div>
                <div className='filter-container'>
                    <TypeReact/>
                </div>
                <div className='filter-container'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#293242" fillOpacity="1" d="M0,128L720,192L1440,192L1440,320L720,320L0,320Z"></path></svg>
                    <Js/>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#293242" fillOpacity="1" d="M0,128L720,192L1440,192L1440,0L720,0L0,0Z"></path></svg>
                </div>
                <div className='filter-container'>
                    <Wordpress/>
                </div>
            </div>

        </div>
    )
}