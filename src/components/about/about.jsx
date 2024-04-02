import React from 'react';
import './about.css';
const About = () => {
    return (
        <div className="flex justify-center items-center h-screen ">
                <div className="pyramid-loader dont_need">
                    <div className="wrapper ">
                        <span className="side side1"></span>
                        <span className="side side2"></span>
                        <span className="side side3"></span>
                        <span className="side side4"></span>
                        <span className="shadow1"></span>
                    </div>
                </div>
            <div className="text-center relative absolute w-[50%]">
                <h1 id='about' className="text-4xl  font-bold mb-4">About Me</h1>
                <p className="text-lg">
                    A dedicated Mern Stack
                    Developer
                    Allow me to introduce myself <br></br>I am an aspiring computer science and
                    engineering student currently pursuing a Bachelor of Technology degree at <b>SVNIT</b>. <br></br>My passion lies in the realm of full stack web development. </p>

            </div>
        </div>
    );
};

export default About;