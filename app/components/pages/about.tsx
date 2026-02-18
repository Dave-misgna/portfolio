import FadeInSection from "../common/SlideUpSection";

export default function About() {
  return (
    <section id="about" className="min-h-screen py-24 px-6">
      <div className="flex gap-3 p-8 sm:flex-row">

        <div className="flex-1">
          <p className="text-lg text-gray-300 leading-relaxed"> - NICE TO MEET YOU!</p>

          <div className="flex items-start gap-6 py-6 ">
        
            <div className="w-1 bg-blue-500 h-full min-h-[100px]" />
       
            <div className="space-y-4 text-gray-300">
              <p className="text-lg font-medium">+251986543674</p>
              <p className="text-lg">dawitmisgna4@gmail.com</p>
              <p className="text-lg">Addis Ababa, Ethiopia</p>
            </div>

          </div>
         
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-start py-4">Hello there! My name is Dawit Misgna. 
            I am a Software Engineering student at Addis Ababa University and 
            a passionate software developer who enjoys building both web applications and mobile apps. 
            I love turning ideas into real, functional products that people can use and enjoy.</p>
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