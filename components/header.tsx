"use client"

import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation"

export default function Header() {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/project", label: "Project" },
        { href: "/contact", label: "Contact" }
    ]

    return (
        <div>
            <div className="flex justify-between p-5">
                <Image src="/logo.jpg" className="rounded-lg" alt="logo" width={50} height={50} />
                <nav className="flex space-x-4">
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} className={`mx-2 hover:text-blue-300 ${pathname === link.href ? "font-bold text-blue-500" : "font-normal"
                            }`}>
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    )
}