import FadeInSection from "../common/SlideUpSection";

export default function About() {
  return (
    <section id="about" className="min-h-screen py-24 px-6">
      <div className="flex gap-12 p-8 sm:flex-row">
        <div className="flex-1 max-w-5xl">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-start py-4">Hello there! My name is Dawit Misgna. 
            I’m a Software Engineering student at Addis Ababa University and 
            a passionate software developer who enjoys building both web applications and mobile apps. 
            I love turning ideas into real, functional products that people can use and enjoy. 
            Whether I’m developing responsive websites with modern UI designs or working on mobile applications 
            that deliver smooth user experiences, I’m always focused on writing clean, efficient, and scalable code..</p>
        </div>
        <div className="flex-1">
          <p className="text-lg text-gray-300 leading-relaxed"> Tech Stacks</p>
          <div className="grid gap-4 sm:gap-3 pt-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
             <button type="button" className="border-2 border-blue-800 rounded-md text-sm font-medium">Flutter</button>
             <button type="button" className="border-2 border-blue-800 rounded-md text-sm font-medium">Jetpack Compose</button>
             <button type="button" className="border-2 border-blue-800 rounded-md text-sm font-medium">Dart</button>
             <button type="button" className="border-2 border-blue-800 rounded-md text-sm font-medium">Java</button>
             <button type="button" className="border-2 border-blue-800 rounded-md text-sm font-medium">Java Script</button>
             <button type="button" className="border-2 border-blue-800 rounded-md text-sm font-medium">Node js</button>
             <button type="button" className="border-2 border-blue-800 rounded-md text-sm font-medium">Express js</button>
             <button type="button" className="border-2 border-blue-800 rounded-md text-sm font-medium">React</button>
             <button type="button" className="border-2 border-blue-800 rounded-md text-sm font-medium">Next js</button>
             <button type="button" className="border-2 border-blue-800 rounded-md text-sm font-medium">Nest js</button>
             <button type="button" className="border-2 border-blue-800 rounded-md text-sm font-medium">Python</button>
             <button type="button" className="border-2 border-blue-800 rounded-md text-sm font-medium">Postgre SQL</button>
             <button type="button" className="border-2 border-blue-800 rounded-md  text-sm font-medium">Mongo DB</button>
          </div>
         
        </div>
      </div>
      <FadeInSection>
        <div className="w-full grid justify-items-center md:grid-cols-3 sm:grid-cols-2 py-12 gap-4">
          <div className="flex items-center justify-center flex-col box-border size-50 rounded-md bg-blue-800">
            <h1 className="text-5xl">2+</h1>
            <p className="text-xl text-gray-300 leading-relaxed">Years Of Experience</p>
          </div>
          <div className="flex items-center justify-center flex-col box-border size-50 rounded-md bg-blue-900">
            <h1 className="text-5xl">20+</h1>
            <p className="text-xl text-gray-300 leading-relaxed">Projects Completed</p>
          </div>
          <div className="flex items-center justify-center flex-col box-border size-50 rounded-md bg-blue-800">
            <h1 className="text-5xl">3+</h1>
            <p className="text-xl text-gray-300 leading-relaxed">Happy Clients</p>
          </div>
        </div>
      </FadeInSection>

    </section>
  );
}