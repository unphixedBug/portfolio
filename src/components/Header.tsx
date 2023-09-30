const Header = () => {
  return (
    <header className="fixed h-16 w-full p-5 flex flex-row justify-center text-slate-950 bg-[rgba(255,255,255,0.5)] backdrop-blur border border-gray-200">
      <ul className="flex flex-row justify-around items-center gap-5">
        <li>PROFIL</li>
        <li>SKILLS</li>
        <li>PROJETS</li>
      </ul>
    </header>
  );
};

export default Header;
