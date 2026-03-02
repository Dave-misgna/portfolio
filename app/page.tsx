import Introduction from "./components/pages/Introduction";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Projects from "./components/pages/projects";
import Skills from "./components/pages/skills";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dawit Misgna | Software Developer",
  description:
    "Dawit Misgna is a Software Developer based in Addis Ababa, Ethiopia.",
  verification: {
    google: "TZq5z-V4zDXYIMlYz4D9c-RkhgG56M63PqSL6-KAJYU",
  },
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
