import React, {useState,useContext ,useEffect} from 'react';
import { useParams } from 'react-router';
import {projectsList} from '../projectsList';
import {AiFillGithub} from 'react-icons/ai';
import {HiOutlineArrowLeft} from 'react-icons/hi'
import { LanguageContext } from './Languagecontext/LanguageContext';
import { Link } from 'react-router-dom';

export default function ProjectDetail(){
    const {english} = useContext(LanguageContext)
    const{id} = useParams();
    const [project, setProject] = useState();


    useEffect(()=>{
        setProject(projectsList[parseInt(id)-1])
    }, [id]);

    return(
        <div className='detail-container'>
            <Link to='/'><HiOutlineArrowLeft className='backpage'/></Link>
            { project ? <>
                <h1>{project.name}</h1>
            <div>
                <a href={project.route} target='_blank' rel="noreferrer">{project.gif ? <img src={'../.' + project.gif} alt="project"/> : <img src={'../.' + project.img} alt="project" />}</a>
                <div className='detail-descrip'>
                    <p>{english? project.description : project.descripcion}</p>
                    {project.repo && <a href={project.repo} target='_blank' rel='noreferrer'><AiFillGithub id='github-icon'/></a>}
                </div>
            </div>
            </> : <div></div>  }

        </div>
    )
}