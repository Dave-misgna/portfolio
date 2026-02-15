import Introduction from "./components/pages/Introduction";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Projects from "./components/pages/projects";


export default function Home() {
  return (
     <main>
      <Introduction />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
