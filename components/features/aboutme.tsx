import Image from "next/image";
import Link from "next/link";

export default function Aboutme() {
    return(
    <div className="flex gap-50 p-5">
    <div>
    <h1 className="text-4xl font-bold mb-5">About Me</h1>   
    <p>Welcome to my about me page!</p>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            <Link href="/about">Learn More</Link>
        </button>
    </div>
        <Image src="/Leepict.jpg" alt="About Me" width={200} height={200}  />   
    </div>
    );
}