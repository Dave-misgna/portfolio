import Link from "next/link";

type ProjectCardProps = {
  title: string;
  image: string;
  tag: string[];
  link: string;
  description?: string;
};

export default function ProjectCard(props: ProjectCardProps) {
  const { title, image, tag , link, description } = props;
  return (
    <div className="bg-neutral-800 w-full max-w-sm border rounded-md shadow-xs h-full flex flex-col border-blue-900">
        <div>
            <img
            className="rounded-t-base w-full h-40 object-cover"
            src={image}
            alt={title}
            />
        </div>

        <div className="flex flex-wrap gap-4 p-4">
            {tag.map((tag, index) => (
            <span key={index}
            className="inline-flex items-center border border-blue-600 bg-neutral-900 text-xs font-medium px-2 py-1 rounded-sm mr-2 mb-2"
            >
            {tag}
            </span>
            ))}

        </div>

        <div className="flex justify-center">
          <h5 className="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading wrap-break-word" >
            {title}
          </h5>
        </div>
        <div className="p-2 wrap-break-word grow">
            <p className="mb-4 text-gray-300 ">{description}</p>
        </div>

        
        <div className="flex justify-center p-4">
            <Link href={link}
            className="mt-auto inline-flex items-center px-4 py-2 text-sm font-medium
             bg-blue-800 rounded-md hover:bg-blue-700 transition-colors duration-300 "
            >
            See more
            </Link>
            
        </div>

      
    </div>
  );
}
