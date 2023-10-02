import ProjectCard from "./ProjectCard";

const Projets = () => {
  return (
    <div className="flex flex-col items-center p-5">
      <h2 className="text-2xl md:text-4xl lg:text-5xl p-5 text-bleu-cv">
        Projets
      </h2>
      <div className="flex flex-wrap gap-3 justify-around">
        <ProjectCard
          name="Portfolio"
          description="Portfolio réalisé dans un contexte de développement agile"
          image="public/projetsimg/portfolio.PNG"
          githubLink="https://github.com/philouLeF/portfolio"
          liveLink="https://philoulef.github.io/portfolio/"
          technologies={["React", "TypeScript", "Tailwind"]}
        />
      </div>
    </div>
  );
};

export default Projets;
