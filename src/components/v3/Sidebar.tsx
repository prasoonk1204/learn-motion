"use client";
import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

const links = [
    { name: "Home", href: "/" },
    { name: "Analytics", href: "/analytics" },
    { name: "Users", href: "/users" },
    { name: "Settings", href: "/settings" },
];

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const sidebarVariants = {
        open: { width: 200 },
        closed: { width: 60 },
    };

    const childVariants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: -20 },
    };

    const parentVariants = {
        open: {
            transition: {
                staggerChildren: 0.07,
                delayChildren: 0.2,
            },
        },
        closed: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
    };

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            // whileHover="open"
            exit="closed"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="h-screen border-r bg-white dark:bg-neutral-900 shadow-sm flex flex-col justify-between"
        >
            {/* Top Section */}
            <motion.div variants={sidebarVariants}>
                <div className="flex items-center justify-between p-4 border-b dark:border-neutral-800">
                    <h2
                        className={`text-xl font-semibold text-gray-800 dark:text-white ${
                            !isOpen && "sr-only"
                        }`}
                    >
                        Dashboard
                    </h2>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
                    >
                        {isOpen ? "<" : ">"}
                    </button>
                </div>

                <motion.ul variants={parentVariants} className="p-3 space-y-2">
                    {links.map((link) => (
                        <motion.li
                            key={link.name}
                            variants={childVariants}
                            transition={{ duration: 0.3 }}
                        >
                            <Link
                                href={link.href}
                                className="flex items-center gap-3 p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
                            >
                                <span>{link.name}</span>
                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </motion.nav>
    );
};
