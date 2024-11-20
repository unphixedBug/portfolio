import Profil from "./Profil";
import Skills from "./Skills";
import Projets from "./Projets";
// import ContactForm from "./ContactForm";

const Main = () => {
  return (
    <main className="mb-16">
      <Profil />
      <Skills />
      <Projets />
      {/* <ContactForm /> */}
    </main>
  );
};

export default Main;
