import React from "react";
import { projectsList } from "../../projectsList";
import {SiFirebase} from 'react-icons/si';
import {FaReact} from 'react-icons/fa';
import Project from "../Project";

export default function Firebase(){

    return(
        <div className='list'>

            <div className='title'>
                <h3>React + Firebase</h3>
                <FaReact/>
                <SiFirebase/>
            </div>
            <div className='preview'>
            {
                projectsList.map((item) => item.code === 'react-fb' && <Project item={item} key={item.id} />)
            }
            </div>

        </div>
        
    )
}