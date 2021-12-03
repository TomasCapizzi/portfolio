import React from "react";
import { projectsList } from "../../projectsList";
import Project from "../Project";
import {FaWordpress} from 'react-icons/fa';


export default function Wordpress(){

    return(
        <div className='list b'>
            <div className='title'>
                <h3>Wordpress</h3><FaWordpress/>
            </div>
            <div className='preview'>
                {
                    projectsList.map((item) => item.code === 'wordpress' && <Project item={item} key={item.id} />)
                }
            </div>

        </div>
    )
}