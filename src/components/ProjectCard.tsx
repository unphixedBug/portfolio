import React from "react";

type ProjectCardProps = {
  name: string;
  description: string;
  image: string;
  githubLink: string;
  liveLink: string;
  technologies: string[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  image,
  githubLink,
  liveLink,
  technologies,
}) => {
  return (
    <div className="flex flex-col items-start gap-2 border pb-12 py-5 px-5 md:px-7 bg-custom-bg rounded-md">
      <h2 className="text-xl md:text-3xl lg:text-4xl m-2 sm:m-3 md:m-4">
        {name}
      </h2>
      <img src={image} alt={`${name} thumbnail`} />
      <p>{description}</p>
      <div className="flex gap-3">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </div>
      <ul className="flex gap-3 ">
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
