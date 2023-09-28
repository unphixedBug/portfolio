import Profil from "./Profil";
import Skills from "./Skills";

const Main = () => {
  return (
    <div className="flex-grow w-full flex flex-col justify-around items-center">
      <Profil />
      <Skills />
    </div>
  );
};

export default Main;
