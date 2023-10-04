import ProjectCard from "./ProjectCard";

const Projets = () => {
  return (
    <div className="flex flex-col items-center p-5" id="projets">
      <h2 className="text-2xl md:text-4xl lg:text-5xl p-5 text-bleu-cv">
        Projets
      </h2>
      <div className="flex flex-wrap justify-around gap-3 md:gap-6 lg:gap-8 pb-10 pt-5 ">
        <ProjectCard
          name="Portfolio"
          description="Portfolio réalisé sans planification préalable"
          image="./projetsimg/portfolio.PNG"
          githubLink="https://github.com/philouLeF/portfolio"
          liveLink="https://philoulef.github.io/portfolio/"
          technologies={["React", "TypeScript", "Tailwind"]}
        />
        <ProjectCard
          name="Portfolio"
          description="Portfolio réalisé sans planification préalable"
          image="/projetsimg/portfolio.PNG"
          githubLink="https://github.com/philouLeF/portfolio"
          liveLink="https://philoulef.github.io/portfolio/"
          technologies={["React", "TypeScript", "Tailwind"]}
        />
        <ProjectCard
          name="Portfolio"
          description="Portfolio réalisé sans planification préalable"
          image="/projetsimg/portfolio.PNG"
          githubLink="https://github.com/philouLeF/portfolio"
          liveLink="https://philoulef.github.io/portfolio/"
          technologies={["React", "TypeScript", "Tailwind"]}
        />
        <ProjectCard
          name="Portfolio"
          description="Portfolio réalisé sans planification préalable"
          image="/projetsimg/portfolio.PNG"
          githubLink="https://github.com/philouLeF/portfolio"
          liveLink="https://philoulef.github.io/portfolio/"
          technologies={["React", "TypeScript", "Tailwind"]}
        />
      </div>
    </div>
  );
};

export default Projets;
