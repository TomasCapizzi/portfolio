import React from "react";
import {Link} from 'react-router-dom';

export default function Project({item}){

    
    return (
        <div className='project' id={'item' + item.id}>

            <img src={item.img} alt=""/>
            <div className='view-hover'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ED6C4E" fillOpacity="1" d="M0,64L720,224L1440,160L1440,320L720,320L0,320Z"></path></svg>
                <div className='view-descrip'>
                    <h5>{item.name}</h5>
                    <div>
                        <button><Link to={'/project/' + item.id}>Detail</Link></button>
                        <button><a href={item.route} target='_blank' rel="noreferrer">Deploy</a></button>
                    </div>
                </div>
            </div>

        </div>
    )
}