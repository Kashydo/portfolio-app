import React from 'react';
import portrait from './potrait.png';
import './AboutMe.css';

function AboutMe() {
    return (
        <div className="AboutMe">
           <img src={portrait} alt="Portrait"/>
           <div class="AboutMeText">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.</p>
           </div>
        </div>
    );
}

export default AboutMe;