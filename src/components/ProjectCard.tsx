import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

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
    <div className="flex flex-col items-start gap-2 border py-6 px-5 md:px-7 bg-custom-bg rounded-md md:w-1/2">
      <h2 className="text-xl md:text-3xl lg:text-4xl m-2 sm:m-3 md:m-4">
        {name}
      </h2>
      <img src={image} alt={`${name} thumbnail`} className="rounded" />
      <p>{description}</p>
      <div className="flex gap-3">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="border rounded px-3 py-1 flex items-center gap-1"
        >
          Github
          <FontAwesomeIcon icon={faLink} />
        </a>

        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="border rounded px-3 py-1 flex items-center gap-1"
        >
          Le projet
          <FontAwesomeIcon icon={faLink} />
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
