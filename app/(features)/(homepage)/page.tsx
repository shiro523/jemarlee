import Image from "next/image";
import Link from "next/link";
import Aboutme from "@/components/features/aboutme";
import FeaturedProjects from "@/components/features/featuredproject";

export default function Homepage() {
  return (
    <div className="flex flex-col gap-10 items-center p-5">
      <div className="flex p-5 gap-50 items-center">
        <Image src="/Leepict2.jpg" alt="myphoto" width={300} height={200} />
        <div className="p-5 text-center">
          <h1 className="text-3xl font-bold mt-4">Welcome to the Homepage</h1>
        <p className="mt-2 text-gray-600">This is the homepage of our Next.js application.</p>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          <Link href="/project">view my project</Link>
        </button>
        </div>
      </div>
      <div>
        <Aboutme />
      </div>
      <div className="flex gap-5 items-center">
        <FeaturedProjects />
      </div>
    </div>
  );
}