import { useEffect, useState } from "react";

const Header = () => {
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const profilElement = document.getElementById("profil");
      const skillsElement = document.getElementById("skills");
      const projetsElement = document.getElementById("projets");

      if (profilElement && skillsElement && projetsElement) {
        const profilOffset = profilElement.offsetTop;
        const skillsOffset = skillsElement.offsetTop;
        const projetsOffset = projetsElement.offsetTop;
        const scrollPosition = window.scrollY + 100; // +100 pour un peu de marge

        if (scrollPosition >= projetsOffset) {
          setCurrentSection("projets");
        } else if (scrollPosition >= skillsOffset) {
          setCurrentSection("skills");
        } else if (scrollPosition >= profilOffset) {
          setCurrentSection("profil");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed h-16 w-full p-5 flex flex-row justify-center bg-[rgb(36, 39, 47)] backdrop-blur text-sm md:text-base lg:text-lg">
      <ul className="flex flex-row justify-around md:justify-center items-center gap-10 w-full ">
        <li>
          <a
            href="#profil"
            onClick={(e) => scrollToSection(e, "profil")}
            className={`hover:text-bleu-cv transition duration-300 ${
              currentSection === "profil" ? "text-bleu-cv" : ""
            }`}
          >
            PROFIL
          </a>
        </li>
        <li>
          <a
            href="#skills"
            onClick={(e) => scrollToSection(e, "skills")}
            className={`hover:text-bleu-cv transition duration-300 ${
              currentSection === "skills" ? "text-bleu-cv" : ""
            }`}
          >
            SKILLS
          </a>
        </li>
        <li>
          <a
            href="#projets"
            onClick={(e) => scrollToSection(e, "projets")}
            className={`hover:text-bleu-cv transition duration-300 ${
              currentSection === "projets" ? "text-bleu-cv" : ""
            }`}
          >
            PROJETS
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
