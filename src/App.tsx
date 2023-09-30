import Contact from "./components/Contact";
import Header from "./components/Header";
import Main from "./components/Main";

/* memo size font 
h1: text-3xl md:text-5xl lg:text-6xl
h2: text-2xl md:text-4xl lg:text-5xl
h3: text-xl md:text-3xl lg:text-4xl

base text: text-xs md:text-sm lg:text-base
*/

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen  text-cyan-50">
      <Header />
      <Main />
      <Contact />
    </div>
  );
}

export default App;
