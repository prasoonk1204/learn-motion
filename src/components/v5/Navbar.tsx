"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

export const Navbar = () => {
    type NavItem = {
        title: string;
        href: string;
    };

    const navItems: NavItem[] = [
        {
            title: "Home",
            href: "/home",
        },
        {
            title: "About",
            href: "/about",
        },
        {
            title: "Contact",
            href: "/contact",
        },
        {
            title: "Login",
            href: "/login",
        },
    ];

    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div className="w-full">
            <nav className="max-w-4xl mx-auto bg-zinc-800 p-2 rounded-full flex justify-around text-lg font-medium">
                {navItems.map((item, idx) => (
                    <Link
                        key={item.title}
                        href={item.href}
                        onMouseEnter={() => setHovered(idx)}
                        onMouseLeave={() => setHovered(null)}
                        className="w-full relative text-white group text-center p-3"
                    >
                        {hovered === idx && (
                            <motion.div 
                            transition={{
                                ease:"easeInOut"
                            }}
                            layoutId="hover"
                            className="absolute inset-0 rounded-full w-full bg-white h-full "></motion.div>
                        )}
                        <span className="relative group-hover:text-black transition-all duration-500 ease-in-out">
                            {item.title}
                        </span>
                    </Link>
                ))}
            </nav>
        </div>
    );
};
