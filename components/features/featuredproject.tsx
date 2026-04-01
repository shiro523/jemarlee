const projectslist = [
  {
    id: 1,
    title: "sample project",
    description: "A sample project that demonstrates the use of Next.js for building a modern web application, showcasing features such as server-side rendering, API routes, and dynamic routing."
  },
  {
    id: 2,
    title: "Another Project",
    description: "This is another sample project that highlights different aspects of Next.js development."
  },
  {
    id: 3,
    title: "Yet Another Project",
    description: "A third sample project demonstrating advanced features and best practices in Next.js development."
  }
];


export default function FeaturedProjects() {
  return (
    <div className="flex gap-5 p-5 text-center  h-full w-full">
      {projectslist.map((Projects) => (
        <div key={Projects.id} className="border-2 rounded-lg shadow-md p-6 mb-4 w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-2">{Projects.title}</h2>
          <p>{Projects.description}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              View Details
            </button>
        </div>
      ))}
    </div>
  );
}