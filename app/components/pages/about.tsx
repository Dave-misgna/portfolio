export default function About() {
  return (
    <section id="about" className="min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <p className="text-gray-400 leading-relaxed">
              I'm a passionate software engineering student with a strong interest in full-stack development and mobile applications. I specialize in building responsive and user-friendly web applications using modern technologies like React, Next.js, and Flutter.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}