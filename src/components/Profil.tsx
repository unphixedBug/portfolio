const Profil = () => {
  return (
    <div className="flex flex-col justify-around align-items-center w-full px-56 py-40 text-slate-950 bg-custom-gradient">
      <p className="text-5xl">Bienvenue !</p>
      <h1 className="text-6xl my-3">Moi c'est Philippe Delcroix</h1>
      <p className="text-4xl">Développeur React junior</p>
      <a
        href="src\assets\cvWebDev2.pdf"
        target="_blank"
        className="my-5 border p-1 rounded border-black inline-block"
      >
        Pour voir mon CV, ça se passe ici
      </a>
    </div>
  );
};

export default Profil;
