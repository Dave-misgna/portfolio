"use client";

import {
  SiReact,
  SiNextdotjs,
  SiNestjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
  SiVite,
  SiFlutter,
  SiDart,
  SiJavascript,
  SiPython
} from "react-icons/si";

const techIcons = [
  { icon: <SiReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiNestjs />, name: "NestJS" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiVite />, name: "Vite" },
  { icon: <SiFlutter />, name: "Flutter" },
  { icon: <SiDart />, name: "Dart" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiPython />, name: "Python" }
  
];

export default function TechStacks() {
  return (
    <div className="relative overflow-hidden py-6 bg-neutral-900 ">
      <div className="flex w-max animate-marquee gap-16">
        {[...techIcons, ...techIcons].map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-300"
          >
            <div className="text-5xl">{tech.icon}</div>
            <span className="mt-2 text-sm">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
