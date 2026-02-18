import Introduction from "./components/pages/Introduction";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Projects from "./components/pages/projects";
import Skills from "./components/pages/skills";


export default function Home() {
  return (
     <main>
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
