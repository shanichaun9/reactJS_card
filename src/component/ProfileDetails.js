import React, { Component } from "react";

function ProfileDetails({name, description}){
    
        return(
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        );
}

export default ProfileDetails