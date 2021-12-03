import React,{useContext} from "react";
import { projectsList } from "../../projectsList";
import Project from "../Project";
import {SiJavascript} from 'react-icons/si';
import { LanguageContext } from "../Languagecontext/LanguageContext";

export default function Js(){
    
    const {english} = useContext(LanguageContext)

    return(
        <div className='list'>
            <div className='title'>
                <h3>JS Vanilla</h3><SiJavascript/>
            </div>
            <div className='preview'>
                {
                    projectsList.map((item) => item.code === 'js' && <Project item={item} key={item.id} english={english} />)
                }
            </div>

        </div>
        
    )
}