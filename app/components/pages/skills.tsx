import Image from "next/image";
import TechStacks from "../common/techStacks";

export default function Skills() {
  return (
      <section id="skills" className="py-10 overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-10">
          My Tech StackS
        </h2>

        <TechStacks />
      </section>
  );
}
