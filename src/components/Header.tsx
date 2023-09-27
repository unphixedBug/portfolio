const Header = () => {
  return (
    <header className="fixed top-0 h-16 border-2 border-neutral-950 rounded w-full flex flex-row justify-center">
      <ul className="flex flex-row justify-around items-center gap-5">
        <li>Profil</li>
        <li>Skills</li>
        <li>Projets</li>
      </ul>
    </header>
  );
};

export default Header;
