import Link from "next/link"

export default function footer(){
    return(
        <footer className="bg-gray-500 text-white py-6 mt-12">
        <div className="flex flex-col gap-10">
            <div className="mx-auto flex gap-5">
                <h1>Quick links:</h1>
                <nav className="grid grid-cols-4 gap-10">
                <Link className="hover:text-blue-300" href="/">Home</Link>
                <Link className="hover:text-blue-300" href="/about">about</Link>
                <Link className="hover:text-blue-300" href="/project">project</Link>
                <Link className="hover:text-blue-300" href="/contact">contact</Link>
                </nav>
            </div>
            <div className="mx-auto flex gap-5">
                <h1>Quick links:</h1>
                <nav className="grid grid-cols-3 gap-10">
                <Link className="hover:text-blue-300" href="/">Facebook</Link>
                <Link className="hover:text-blue-300" href="/about">Instagram</Link>
                <Link className="hover:text-blue-300" href="/project">Tiktok</Link>
                </nav>
            </div>
        </div>
        </footer>
    )
}