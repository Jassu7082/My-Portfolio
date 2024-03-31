import React from 'react';
import './about.css';
const About = () => {
    return (
        <div className="flex justify-center items-center h-screen">
                <div class="pyramid-loader">
                    <div class="wrapper z-[-1]">
                        <span class="side side1"></span>
                        <span class="side side2"></span>
                        <span class="side side3"></span>
                        <span class="side side4"></span>
                        <span class="shadow1"></span>
                    </div>
                </div>
            <div className="text-center relative absolute w-[50%]">
                <h1 id='about' className="text-4xl  font-bold mb-4">About Me</h1>
                <p className="text-lg">
                    A dedicated Mern Stack
                    Developer
                    Allow me to introduce myself—I am an aspiring computer science and
                    engineering student currently pursuing a Bachelor of Technology degree at <b>SVNIT</b>. <br></br>My passion lies in the realm of full stack web development. </p>

            </div>
        </div>
    );
};

export default About;