import React from 'react';
import cIcon from "../../assets/c_icon.png";
import cPlusPlusIcon from "../../assets/c++_icon.png";
import pythonIcon from "../../assets/python_icon.png";
import htmlIcon from "../../assets/html_icon.png";
import cssIcon from "../../assets/css_icon.png";
import jsIcon from "../../assets/js_icon.png";
import tailwindIcon from "../../assets/tailwindcss_icon.png";
import reactIcon from "../../assets/react.png";
import mongodbIcon from "../../assets/mongodb.png";
import nodeIcon from "../../assets/node.png";
import firebaseIcon from "../../assets/firebase_icon.webp";
import mysqlIcon from "../../assets/mysql_icon.png";
import gitIcon from "../../assets/git_icon.png";

const technologies = [
    { name: 'C', imageSrc: cIcon, altText: 'C', color: '#A8B9CC' },
    { name: 'C++', imageSrc: cPlusPlusIcon, altText: 'C++', color: '#00599C' },
    { name: 'Python', imageSrc: pythonIcon, altText: 'Python', color: '#306998' },
    { name: 'HTML', imageSrc: htmlIcon, altText: 'HTML', color: '#E34F26' },
    { name: 'CSS', imageSrc: cssIcon, altText: 'CSS', color: '#1572B6' },
    { name: 'JavaScript', imageSrc: jsIcon, altText: 'JavaScript', color: '#F7DF1E' },
    { name: 'Tailwind', imageSrc: tailwindIcon, altText: 'Tailwind CSS', color: '#38B2AC' },
    { name: 'React', imageSrc: reactIcon, altText: 'React', color: '#61DAFB' },
    { name: 'MongoDB', imageSrc: mongodbIcon, altText: 'MongoDB', color: '#47A248' },
    { name: 'Node.js', imageSrc: nodeIcon, altText: 'Node.js', color: '#339933' },
    { name: 'Firebase', imageSrc: firebaseIcon, altText: 'Firebase', color: '#FFCA28' },
    { name: 'MySQL', imageSrc: mysqlIcon, altText: 'MySQL', color: '#4479A1' },
    { name: 'Git', imageSrc: gitIcon, altText: 'Git', color: '#F05032' },
];


const TechnologyCard = ({ name, imageSrc, altText, color }) => {
    return (
        <div className="popover-container">
            <div className="hover-element">
                <div
                    className={`flex justify-center items-center flex-col sm:p-4 sm:w-[80px] sm:h-[80px] w-[70px] h-[70px] p-2 bg-zinc-900 sm:rounded-[15px] rounded-[12px] duration-500 ease-in-out cursor-pointer hover:-translate-y-2 border-2 border-gray-600`}
                    style={{ 
                        borderColor: null, 
                        transition: 'box-shadow 0.3s ease',
                        boxShadow: `0 0 20px 5px transparent`, // Set initial box shadow to transparent
                    }}
                    onMouseEnter={(event) => {
                        event.currentTarget.style.boxShadow = `0 0 20px 5px ${color}`; // Apply box shadow on hover
                    }}
                    onMouseLeave={(event) => {
                        event.currentTarget.style.boxShadow = `0 0 20px 5px transparent`; // Remove box shadow on hover out
                    }}
                >
                    <img
                        alt={altText}
                        loading="lazy"
                        width="40"
                        height="40"
                        decoding="async"
                        data-nimg="1"
                        className="duration-500 ease-in-out hover:scale-105"
                        src={imageSrc}
                    />
                    {/* <div>{name}</div> */}
                </div>
            </div>
        </div>
    );
  };
const TechnologiesContainer = () => {
  return (
    <div id="Tech" className="flex flex-col items-center">
      <div style={{ opacity: 0.975698, transform: 'none' }}>
        <div className="flex w-fit justify-center bg-[#ffffff] bg-opacity-[0.16] py-2 px-6 rounded-3xl hover:border-zinc-500 transition-all duration-300 ease-in-out my-[80px] border-[1.5px] border-[#515151] backdrop-filter backdrop-blur-2xl">
          <div className="flex justify-center items-center gap-2">
            <div className="text-[13px] sm:text-[17px] font-semibold">Technologies</div>
          </div>
        </div>
      </div>
      <div className="sm:grid flex flex-wrap justify-center items-center gap-4 sm:grid-rows-2 sm:grid-cols-6">
        {technologies.map((tech, index) => (
          <TechnologyCard key={index} {...tech} />
        ))}
      </div>
    </div>
  );
};
export default TechnologiesContainer;