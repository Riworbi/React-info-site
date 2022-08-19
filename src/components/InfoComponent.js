import React from "react";
import ProfilePicture from './Profile.jpg'



export default function Navbar() {

    return (
        <div className="InfoComponent">
            <img src={ProfilePicture} alt="Profile" className="ProfilePicture"></img>
            <h2 className="InfoFullName">Krystian Maniewski</h2>
            <h3 className="InfoJob">Fullstack Developer</h3>
            <h5 className="InfoWebsite">KrystianManiewski.website</h5>
            <div className="InfoButtons"> 
           
            <a href="mailto: riworbix@gmail.com">
            <button className="ButtonEmail">
            <i class="fa fa-envelope"> </i>
            &nbsp;
            Email
            </button>
            </a>

            <button className="ButtonGithub" onClick={OpenLinkedIn}>
            <i class="fa fa-github"  style={{fontSize:"20px"}}></i>
            &nbsp;
            Github
            </button>

            </div>
        </div>
    )
}

function OpenLinkedIn(){
    window.location.href='https://github.com/Riworbi';
}