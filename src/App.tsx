import Contact from "./components/Contact";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full text-cyan-50">
      <Header />
      <Main />
      <Contact />
    </div>
  );
}

export default App;
