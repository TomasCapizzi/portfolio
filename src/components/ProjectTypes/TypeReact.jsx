import React from "react";
import { projectsList } from "../../projectsList";
import {FaReact} from 'react-icons/fa';
import Project from "../Project";

export default function TypeReact(){

    return(
        <div className='list b'>
            <div className='title'>
                <h3>React</h3>
                <FaReact/>
            </div>
            <div className='preview'>
                {
                    projectsList.map((item) => item.code === 'react' && <Project item={item} key={item.id} />)
                }
            </div>

        </div>
        
    )
}