import Card from "./projectcard.jsx";
import React from "react";

const Project = () => {
    const projects = [
        { title: "Project 1", description: "Description 1" },
        { title: "Project 2", description: "Description 2" },
        { title: "Project 3", description: "Description 3" },
        { title: "Project 4", description: "Description 4" },
        { title: "Project 5", description: "Description 5" },
        { title: "Project 6", description: "Description 6" },
    ];

    return (
        <div className="flex flex-row gap-10 ">
            {projects.map((project, index) => (
                <Card
                    key={index}
                    title={project.title}
                    desp={project.description}
                    github={null}
                    live={null}
                />
            ))}
        </div>
    );
};

export default Project;