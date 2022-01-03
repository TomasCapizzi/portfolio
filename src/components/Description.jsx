import {AiFillGithub, AiFillHtml5} from 'react-icons/ai';
import {BsChevronCompactDown, BsChevronCompactUp, BsChevronDoubleDown, BsChevronDoubleUp} from 'react-icons/bs'
import {FaCss3Alt, FaGitAlt, FaNodeJs, FaReact, FaSass, FaWordpress} from 'react-icons/fa';
import React,{useContext, useState} from 'react';
import {SiAdobeaftereffects, SiAdobeillustrator, SiAdobephotoshop, SiAdobepremiere, SiBulma, SiFirebase, SiJavascript, SiRedux} from 'react-icons/si';

import { LanguageContext } from './Languagecontext/LanguageContext';

//import {HiChevronDoubleLeft, HiChevronDoubleRight} from 'react-icons/hi'




export default function Description(){

    const {english} = useContext(LanguageContext);
    const [open, setOpen] = useState(false);

    function openInfoPanel(){
        const info = document.getElementById('info');
        console.log(info);
        setOpen(!open);
        info.classList.toggle('on');
    }

    return(
        <article className='about-me'id='aboutme' >
            <article className='home'>
                <h1 id='about-me'>{english ? `Hi, I'm Tomas Capizzi !` : 'Hola, soy Tomás Capizzi'}</h1>
                <h2>FRONT END DEVELOPER</h2>
                <div className='btn-down'>
                    <div>
                        <BsChevronDoubleDown className='link-down-1'/>
                        <a href="#personal-info"><BsChevronCompactDown/></a>
                    </div>
                </div>  
                <span id='personal-info'></span>      
                <ul>
                    <li><AiFillHtml5/><span>Html</span></li>
                    <li><FaCss3Alt/><span>Css</span></li>
                    <li><SiJavascript/><span>Javascript</span></li>
                    <li><FaNodeJs/><span>Node Js</span></li>
                    <li><FaReact/><span>React</span></li>
                    <li><SiRedux/><span>Redux</span></li>
                    <li><SiFirebase/><span>Firebase</span></li>
                    <li><FaSass/><span>Sass</span></li>
                    <li><SiBulma/><span>Bulma CSS</span></li>
                    <li><FaGitAlt/><span>Git</span></li>
                    <li><AiFillGithub/><span>Github</span></li>
                    <li><FaWordpress/><span>Wordpress</span></li>
                    <li><SiAdobepremiere/><span>Premiere</span></li>
                    <li><SiAdobeaftereffects/><span>After Effects</span></li>
                    <li><SiAdobeillustrator/><span>Illustrator</span></li>
                    <li><SiAdobephotoshop/><span>Photoshop</span></li>
                </ul>
            </article>
            <div className='info-container'>
                <span  id='info-title'></span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ED6C4E" fill-opacity="1" d="M0,256L480,224L960,224L1440,160L1440,320L960,320L480,320L0,320Z"></path>
                </svg>
                <article>
                    <div className='panel-closed'>
                        <h5>{english ? 'Know more about me!' : 'Conoce sobre mí'}</h5>
                        <div className='btn-open-panel'>
                            <div>
                                {open ? <BsChevronDoubleUp className='svg1'/> : <BsChevronDoubleDown className='svg1'/>}
                                <a href="#info-title">{open ? <BsChevronCompactUp className='svg2' onClick={openInfoPanel}/> :<BsChevronCompactDown className='svg2' onClick={openInfoPanel}/>}</a>
                            </div>
                        </div> 
                    </div>
                    <div className='info' id='info'>
                        <div>
                            <img src="./img/115.jpg" alt="profile" />
                        </div>
                        {
                            english ? 
                            <p>Hi! Mi name is Tomas Capizzi, i'm a digital producer and currently i'm focusing on Front-End development, with knowledge's on Javascript, Html, CSS and React.

                            This past months I decided to focus my free time on learning something that has been interesting me for a while, and I had taken a few courses a couple of years before, that is the web development
                            Complementing this knowledge with the career where i'm currently doing the last subjects, the degree on Digital Arts focused on Audiovisual.</p>
                            : 
                            <p>Hola! Mi nombre es Tomás Capizi, soy productor digital y actualmente me encuentro enfocandome en el desarrollo frontend. Cuento con conocimientos en Javascript, Html, Css y React.
                                Estos últimos meses decidí enfocar mi tiempo libre en aprender algo que me habia interesado bastante en su momento, dado que habia hecho algunos cursos básicos de maquetado.
                                Me prepare para poder complementar estos conocimientos junto con la carrera que estoy estudiando y finalizando las últimas materias, la Licenciatura en Artes Digitales</p>
                        }

                    </div>

                </article>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ED6C4E" fill-opacity="1" d="M0,256L480,224L960,224L1440,160L1440,0L960,0L480,0L0,0Z"></path>
                </svg>  
            </div>
        </article>
    )
}