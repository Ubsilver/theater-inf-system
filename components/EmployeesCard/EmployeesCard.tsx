'use client'
import React from "react";

export default function EmployeesCard({id, photo, last_name, first_name}){
    return(
        <div>
            <img src={photo} alt="."></img>
            <h2>{last_name} {first_name}</h2>
        </div>   
    );
};