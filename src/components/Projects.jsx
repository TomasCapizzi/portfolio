import React,{useContext} from 'react';
import {projectsList} from '../projectsList';
import Project from './Project';
import {FaReact, FaWordpress} from 'react-icons/fa';
import {SiJavascript} from 'react-icons/si';
import { LanguageContext } from './Languagecontext/LanguageContext';

export default function Projects(){

    const {english} = useContext(LanguageContext)
    return (
        <div className='projects'>
            <h3 id='projects'>{english ? 'Projects' : 'Proyectos'}</h3>
            <div className='projects-container'>
                <div className='filter-container'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ed6c4e" fillOpacity="1" d="M0,128L720,192L1440,192L1440,320L720,320L0,320Z"></path></svg>
                     <div className='projects-react'>
                        <div><h3>React</h3><FaReact/></div>
                        <span></span>
                            {
                                projectsList.map((item) => item.code === 'react' && <Project item={item} key={item.id} />)
                            }
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ed6c4e" fillOpacity="1" d="M0,128L720,192L1440,192L1440,0L720,0L0,0Z"></path></svg>
                     </div>
                <div className='filter-container'>
                  <div className='projects-jsVanilla'>
                        <div><h3>JS Vanilla</h3><SiJavascript/></div>
                        <span></span>
                        {
                            projectsList.map((item) => item.code === 'js' && <Project item={item} key={item.id} english={english} />)
                        }
                    </div>
                </div>
                <div className='filter-container'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#293242" fillOpacity="1" d="M0,128L720,192L1440,192L1440,320L720,320L0,320Z"></path></svg>
                  <div className='projects-wordpress'>
                        <div><h3>Wordpress</h3><FaWordpress/></div>
                        <span></span>
                        {
                            projectsList.map((item) => item.code === 'wordpress' && <Project item={item} key={item.id} />)
                        }
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#293242" fillOpacity="1" d="M0,128L720,192L1440,192L1440,0L720,0L0,0Z"></path></svg>
                     </div>


            </div>

        </div>
    )
}