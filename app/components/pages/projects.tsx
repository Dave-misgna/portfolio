import ProjectCard from "../common/project_card";
export default function Projects(){
    const projects = [
    {
      title: "Flutter Attendance App",
      image: "/images/portfolio_image.jpg",
      tag: ["Flutter", "Drift", "Dart", "Mobile App"],
      description: "A mobile application built with Flutter and Drift that allows users to easily track attendance. The app features a user-friendly interface and provides real-time updates on attendance records.",
      link: "#",
    },
    {
      title: "Flutter Attendance App",
      image: "/images/portfolio_image.jpg",
      tag: ["Flutter", "Drift", "Dart", "Mobile App"],
      link: "#",
      description: "A mobile application built with Flutter and Drift that allows users to easily track attendance."
    },
    {
      title: "3D Pendulum Simulation",
      image: "/images/portfolio_image.jpg",
      tag: ["Three.js"],
      link: "#",
    },
    {
      title: "Flutter Attendance App",
      image: "/images/portfolio_image.jpg",
      tag: ["Flutter", "Drift", "Mobile App"],
      link: "#",
      description: "A mobile application built with Flutter and Drift that allows users to easily track attendance."
    },
    {
      title: "Flutter Attendance App",
      image: "/images/portfolio_image.jpg",
      tag: ["Flutter", "Drift", "Dart", "Mobile App"],
      link: "#",
      description: "A mobile application built with Flutter and Drift that allows users to easily track attendance."
    },
    
  ];
    return(
        <section id="projects" className="min-h-screen">
            <div className="flex flex-col items-start">
                <h1 className="text-4xl font-bold mb-6">Projects</h1>
                <p className="text-start">Recent completed works</p>
            </div>

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
            <div className="flex justify-center mt-8">
                <button type="button" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
                    View All Projects
                </button>
            </div>
        </section>
    );
}