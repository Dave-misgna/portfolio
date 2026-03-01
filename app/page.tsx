import Introduction from "./components/pages/Introduction";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Projects from "./components/pages/projects";
import Skills from "./components/pages/skills";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dawit Misgna | Flutter Developer in Ethiopia",
  description:
    "Dawit Misgna is a Flutter Developer and Full Stack Engineer based in Addis Ababa, Ethiopia.",
  keywords: [
    "Dawit Misgna",
    "Flutter Developer Ethiopia",
    "Mobile App Developer Addis Ababa",
    "Full Stack Developer",
    "Riverpod",
    "NestJS",
    "Prisma",
  ],
  authors: [{ name: "Dawit Misgna" }],
};
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
