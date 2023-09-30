import ProjectCard from "./ProjectCard";

const Projets = () => {
  return (
    <div className="p-5 w-full md:w-1/2">
      <h2 className="text-2xl md:text-4xl lg:text-5xl p-5 text-bleu-cv">
        Projets
      </h2>
      <div className="flex flex-wrap gap-3">
        <ProjectCard
          name="Portfolio"
          description="Portfolio réalisé sans préparation préalable"
          image="src\assets\projetsimg\portfolio.PNG"
          githubLink="https://github.com/philouLeF/portfolio"
          liveLink="https://monProjetEnProd.com"
          technologies={["React", "TypeScript", "Tailwind"]}
        />
        <ProjectCard
          name="Portfolio"
          description="Portfolio réalisé sans préparation préalable"
          image="src\assets\projetsimg\portfolio.PNG"
          githubLink="https://github.com/philouLeF/portfolio"
          liveLink="https://monProjetEnProd.com"
          technologies={["React", "TypeScript", "Tailwind"]}
        />
        <ProjectCard
          name="Portfolio"
          description="Portfolio réalisé sans préparation préalable"
          image="src\assets\projetsimg\portfolio.PNG"
          githubLink="https://github.com/philouLeF/portfolio"
          liveLink="https://monProjetEnProd.com"
          technologies={["React", "TypeScript", "Tailwind"]}
        />
      </div>
    </div>
  );
};

export default Projets;
