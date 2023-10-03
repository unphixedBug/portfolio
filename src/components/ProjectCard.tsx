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
    <div className="flex flex-col items-start gap-2 lg:gap-3  border rounded-md  py-6 px-5 md:px-7 md:w-[calc(50%-1rem)] lg:w-[calc(33.3333%-2rem)]  bg-custom-bg">
      <h2 className="text-xl md:text-3xl lg:text-4xl m-2 sm:m-3 md:m-4">
        {name}
      </h2>
      <img src={image} alt={`${name} thumbnail`} className="rounded" />
      <p className="text-sm md:text-base lg:text-lg">{description}</p>
      <div className="flex gap-3 my-2">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="border rounded px-3 py-1 flex items-center gap-1 hover:text-bleu-cv hover:border-bleu-cv transition duration-300 text-sm md:text-base lg:text-lg"
        >
          Github
          <FontAwesomeIcon icon={faLink} />
        </a>

        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="border rounded px-3 py-1 flex items-center gap-1 hover:text-bleu-cv hover:border-bleu-cv transition duration-300 text-sm md:text-base lg:text-lg"
        >
          Le projet
          <FontAwesomeIcon icon={faLink} />
        </a>
      </div>
      <ul className="flex flex-wrap gap-3 ">
        {technologies.map((tech, index) => (
          <li
            key={index}
            className="bg-white rounded-full text-bleu-cv px-2 py-1 text-custom-bg base text-sm md:text-base lg:text-lg"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
