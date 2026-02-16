import Link from "next/link";
import ProjectCard from "../common/project_card";
import FadeInSection from "../common/SlideUpSection";
export default function Projects(){
    const projects = [
    {
      title: "Auction Flutter App",
      image: "/images/image.jpg",
      tag: ["Flutter", "Riverpod", "Dart", "Firebase Auth"],
      description: "An Art Auction Mobile App built for Kuraz Tech, allowing artists to showcase their artworks for auction and users to bid in real time.",
      link: "https://github.com/Dave-misgna/Art-Auction-App",
    },
    {
      title: "Flutter Attendance App",
      image: "/images/attendanceapp.png",
      tag: ["Flutter", "Provider", "Dart", "GoRouter"],
      link: "https://github.com/Dave-misgna/Attendance-App",
      description: "A Flutter-based offline employee attendance management app designed to help New-Hope PLC track and control their employee attendance efficiently."
    },
    {
      title: "Drumkit demo website",
      image: "/images/drumkit.png",
      tag: ["javascript", "html", "css"],
      link: "https://dave-misgna.github.io/Drum-Kit/",
      description:"Template designed for users to explore, learn, and play virtual drum sounds, typically by pressing buttons on the website that trigger different drum kit sounds."
    },
    {
      title: "Flutter News App",
      image: "/images/newsapp.png",
      tag: ["Flutter", "Riverpod", "GetIt", "Firebase ", "Guardian API"],
      link: "https://github.com/Dave-misgna/News-App",
      description: "A Flutter News Application that fetches the latest news from [The Guardian API]"
    },
    {
      title: "Flutter Movie App ",
      image: "/images/image.png",
      tag: ["Flutter", "Riverpod", "GetIt", "TMDb API"],
      link: "https://github.com/Dave-misgna/Movie-App",
      description: "A Flutter Movie Application that fetches movies from [The Movie Database (TMDb) API]."
    },
    
  ];
    return(
        <section id="projects" className="min-h-screen">
            <div className="flex flex-col items-start">
                <h1 className="text-4xl font-bold mb-6">Projects</h1>
                <p className="text-start">Recent completed works</p>
            </div>
            <FadeInSection>
            <div className="grid gap-12 md:grid-cols-3 sm:grid-cols-2 justify-items-center p-8 items-stretch">
                {projects.map((project, index) => (
                    <ProjectCard
                    key={index}
                    title={project.title}
                    image={project.image}
                    tag={project.tag}
                    link={project.link}
                    description={project.description}
                    />
                ))}
            </div>
            </FadeInSection>
            <div className="flex justify-center mt-8 py-5">
                <Link href="https://github.com/Dave-misgna" target="_blank" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
                    View All Projects
                </Link>
            </div>
        </section>
    );
}