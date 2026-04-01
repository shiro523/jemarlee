import FeaturedProjects from "@/components/features/featuredproject";
export default function project(){
    return(
    <div className="flex flex-col gap-10 p-5">
    <h1 className="text-3xl font-bold">My project</h1>
    
    <FeaturedProjects />

  </div>
    );
}