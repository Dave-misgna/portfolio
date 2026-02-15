import Image from "next/image";
import Link from "next/link";

export default function Introduction() {
  return (
    <section
      id="intro"
      className="min-h-screen flex items-center px-6 pt-24 bg-neutral-900"
    >
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-between gap-12 md:items-center">

        {/*LEFT SIDE*/}
        <div className="flex-1 space-y-10 text-center p-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm 
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-gray-400">Dawit</span> Misgna
          </h1>

          <p className="text-gray-400 text-lg py-6">
            Flutter Developer | Full Stack Developer | CyberSecurity Enthusiast
          </p>
          
            <div className="flex max-w-4xl text-xl gap-10 px-4">
              <Link href=""className="inline-flex items-center justify-center px-2 py-2 border border-transparent 
              font-medium rounded-md shadow-sm bg-blue-500 hover:bg-blue-700 text-white basis-xs ">
                Resume
              </Link>
              <Link href="#contact"className="inline-flex items-center justify-center px-2 py-2 border border-blue-500 
               font-medium rounded-md shadow-sm bg-gray-700 hover:bg-gray-900 text-white basis-xs">
                Let's Talk
              </Link>
              
            </div>

        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/portfolio_image.jpg"
            alt="Dawit profile"
            width={400}
            height={400}
            className="rounded-full object-cover w-64 h-64 md:w-80 md:h-80"
          />
        </div>

      </div>
    </section>
  );
}

