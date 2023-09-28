const Header = () => {
  return (
    <header className="fixed top-2 right-2 h-16 w-1/6 border-2 border-neutral-950 rounded-full w-full flex flex-row justify-center bg-slate-400">
      <ul className="flex flex-row justify-around items-center gap-5">
        <li>Profil</li>
        <li>Skills</li>
        <li>Projets</li>
      </ul>
    </header>
  );
};

export default Header;
