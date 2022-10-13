import React from "react";
import "./Car.css"

import {BsFillBriefcaseFill, BsFillCpuFill} from 'react-icons/bs'
import {FaCanadianMapleLeaf} from 'react-icons/fa'

export default function  Car(props){
    return(
        
        <div className="heading">
          <h1><BsFillBriefcaseFill /> {props.make}</h1>
            
             <h2><BsFillCpuFill />{props.model}</h2>
             <h2><FaCanadianMapleLeaf />{props.year}</h2>
             <hr />
        </div>
     
    )
}