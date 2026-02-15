export default function About() {
  return (
    <section id="about" className="min-h-screen py-24 px-6">
      <div className="flex gap-12 p-8 sm:flex-row">
        <div className="flex-1 max-w-5xl">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-start">Hello there! My name is Dawit Misgna. 
            I am a web designer & developer, and I'm very passionate and dedicated to my work.
              With 20 years experience as a professional a graphic designer, 
              I have acquired the skills and knowledge necessary to make your project 
              a success.I enjoy every step of the design process, from discussion and collaboration.</p>
        </div>
        <div className="flex-1">
          <p className="text-lg text-gray-300 leading-relaxed"> Tech Stack</p>
          <div className="grid gap-4 sm:gap-3 pt-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
             <button type="button" className=" bg-blue-800 rounded-md p-1 text-sm font-medium">Flutter</button>
             <button type="button" className="bg-blue-800 rounded-md p-1 text-sm font-medium">Jetpack Compose</button>
             <button type="button" className="bg-blue-800 rounded-md p-1 text-sm font-medium">Dart</button>
             <button type="button" className="bg-blue-800 rounded-md p-1 text-sm font-medium">Java</button>
             <button type="button" className="bg-blue-800 rounded-md p-1 text-sm font-medium">Java Script</button>
             <button type="button" className="bg-blue-800 rounded-md p-1 text-sm font-medium">Node js</button>
             <button type="button" className="bg-blue-800 rounded-md p-1 text-sm font-medium">Express js</button>
             <button type="button" className="bg-blue-800 rounded-md p-1 text-sm font-medium">React</button>
             <button type="button" className="bg-blue-800 rounded-md p-1 text-sm font-medium">Next js</button>
             <button type="button" className="bg-blue-800 rounded-md p-1 text-sm font-medium">Nest js</button>
             <button type="button" className="bg-blue-800 rounded-md p-1 text-sm font-medium">Python</button>
             <button type="button" className="bg-blue-800 rounded-md p-1 text-sm font-medium">Postgre SQL</button>
             <button type="button" className="bg-blue-800 rounded-md p-1 text-sm font-medium">Mongo DB</button>
          </div>
         
        </div>
      </div>
      
        <div className="w-full grid justify-items-center md:grid-cols-3 sm:grid-cols-2 py-8">
          <div className="flex items-center justify-center flex-col box-border size-64 rounded-md mt-12 bg-blue-800">
            <h1 className="text-6xl">2+</h1>
            <p className="text-2xl text-gray-300 leading-relaxed">Years Of Experience</p>
          </div>
          <div className="flex items-center justify-center flex-col box-border size-64 rounded-md mt-12 bg-blue-900">
            <h1 className="text-6xl">20+</h1>
            <p className="text-2xl text-gray-300 leading-relaxed">Projects Completed</p>
          </div>
          <div className="flex items-center justify-center flex-col box-border size-64 rounded-md mt-12 bg-blue-800">
            <h1 className="text-6xl">3+</h1>
            <p className="text-2xl text-gray-300 leading-relaxed">Happy Clients</p>
          </div>
        </div>

    </section>
  );
}