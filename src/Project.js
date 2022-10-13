import React from "react";
export default function Project(props){
    return(
        <div>
            <h1>Project </h1>
            <b>{props.title}</b>
            <br />
            <b>{props.desc}</b>
        </div>
    )
}

