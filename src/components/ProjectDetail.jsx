import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import {projectsList} from '../projectsList';
import {AiFillGithub} from 'react-icons/ai'

export default function ProjectDetail(){
    const{id} = useParams();
    const [project, setProject] = useState();

    useEffect(()=>{
        setProject(projectsList[parseInt(id)-1])
    }, [id]);

    return(
        <div className='detail-container'>
            { project ? <>
                <h1>{project.name}</h1>
            <div>
                <a href={project.route} target='_blank' rel="noreferrer">{project.gif ? <img src={'../.' + project.gif} alt="project"/> : <img src={'../.' + project.img} alt="project" />}</a>
                <div className='detail-descrip'>
                    <p>{project.description}</p>
                    {project.repo && <a href={project.repo} target='_blank' rel='noreferrer'><AiFillGithub/></a>}
                </div>
            </div>
            </> : <div></div>  }

        </div>
    )
}