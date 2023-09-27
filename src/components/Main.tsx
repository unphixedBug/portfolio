import Profil from "./Profil";
import Skills from "./Skills";

const Main = () => {
  return (
    <div className="flex-grow w-full max-w-full border-2 border-neutral-950 rounded mt-16 mb-16">
      <Profil />
      <Skills />
    </div>
  );
};

export default Main;
