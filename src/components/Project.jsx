import React from "react";
import {Link} from 'react-router-dom';
import {FaCheckCircle} from 'react-icons/fa';

export default function Project({item}){

    
    return (
        <div className='project' id={'item' + item.id}>

            <img src={item.img} alt=""/>
            <div className='view-hover'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ED6C4E" fillOpacity="1" d="M0,64L720,224L1440,160L1440,320L720,320L0,320Z"></path></svg>
                <div className='view-descrip'>
                    <h5>{item.name}</h5>
                    <ul className='tech-list'>
                        {item.tech.api && <li><FaCheckCircle/> API Rest</li>}
                        {item.tech.auth && <li><FaCheckCircle/> Auth</li>}
                        {item.tech.db && <li><FaCheckCircle/> Firestore</li>}
                        {item.tech.ls && <li><FaCheckCircle/> Local Storage</li>}
                        {item.tech.responsive && <li><FaCheckCircle/> Responsive</li>}
                        {item.tech.sass && <li><FaCheckCircle/> Sass</li>}
                        {item.tech.customHook && <li><FaCheckCircle/> Custom Hooks</li>}
                    </ul>
                    <div>
                        <Link to={'/project/' + item.id}><button>Detail</button></Link>
                        <button><a href={item.route} target='_blank' rel="noreferrer">Deploy</a></button>
                    </div>
                </div>
            </div>

        </div>
    )
}