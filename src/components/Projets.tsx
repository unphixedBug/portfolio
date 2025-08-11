import ProjectCard from "./ProjectCard";

const Projets = () => {
  return (
    <div className="flex flex-col items-center p-5" id="projets">
      <h2 className="text-2xl md:text-4xl lg:text-5xl p-5">PROJETS</h2>
      <div className="flex flex-wrap justify-around gap-3 md:gap-6 lg:gap-8 pb-10 pt-5 ">
        <ProjectCard
          name="Portfolio"
          description="Portfolio réalisé de manière réactive et adaptative"
          image="./projetsimg/portfolio.PNG"
          githubLink="https://github.com/philouLeF/portfolio"
          liveLink="https://philoulef.github.io/portfolio/"
          technologies={["React", "TypeScript", "Tailwind"]}
        />
        <ProjectCard
          name="Formulaire multi-étapes"
          description={
            <p>
              Projet <i>Frontend Mentor</i> lancé pour tester React Hook Form et
              Zod pour la création de formulaires incluant des validations ainsi
              que Shadcn pour des composants accessibles.
              <br />
              Il s'est avéré être plus formateur que ce que je pensais, c'est
              pour cette raison que j'ai décidé de l'ajouter à mon portfolio.
            </p>
          }
          image="./projetsimg/multiStepForm.PNG"
          githubLink="https://github.com/unphixedBug/multi-step-form-main"
          liveLink="https://unphixedbug.github.io/multi-step-form-main"
          technologies={[
            "React",
            "TypeScript",
            "Shadcn",
            "React Hook Form",
            "Zod",
          ]}
        />
      </div>
    </div>
  );
};

export default Projets;
