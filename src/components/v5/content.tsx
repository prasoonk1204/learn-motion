"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion } from "motion/react";

export const V5content = () => {
    const [current, setCurrrent] = useState<Card | null>(null);

    return (
        <div className="py-20 w-full bg-gray-200 min-h-screen">
            {current && (
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        ease: "easeInOut",
                    }}
                    className="fixed inset-0 bg-black/40 backdrop-blur-md z-10"
                    onClick={() => setCurrrent(null)}
                ></motion.div>
            )}
            {current && (
                <motion.div
                    layoutId={`card-${current.title}`}
                    className="h-[600px] fixed inset-0 m-auto bg-white z-20 w-80 rounded-2xl border border-neutral-200 p-4"
                >
                    <motion.img
                        layoutId={`cardImage-${current.title}`}
                        src={current.src || "/image.png"}
                        alt="image"
                        className="rounded-xl h-60 object-cover"
                    ></motion.img>
                    <div className="flex justify-between items-start mt-4">
                        <div className="flex flex-col justify-center items-start">
                            <motion.h2
                                layoutId={`cardTitle-${current.title}`}
                                className="text-lg font-bold text-black"
                            >
                                {current.title}
                            </motion.h2>
                            <motion.p
                                layoutId={`cardDesc-${current.title}`}
                                className="text-neutral-500 text-xs"
                            >
                                {current.description}
                            </motion.p>
                        </div>
                        <motion.div layoutId={`cardCta-${current.title}`}>
                            <Link
                                href={current.ctaLink}
                                className="px-4 py-1 bg-emerald-500 rounded-lg"
                            >
                                {current.ctaText}
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{
                            filter: "blur(10px)",
                            opacity: 0,
                        }}
                        animate={{
                            filter: "blur(0px)",
                            opacity: 1,
                        }}
                        transition={{
                            delay: 0.3,
                        }}
                        className="mt-2 overflow-auto mask-[linear-gradient(to_top,transparent,black_50%)]"
                    >
                        {current.content()}
                    </motion.div>
                </motion.div>
            )}
            <div className="max-w-2xl mx-auto flex flex-col gap-10">
                {cards.map((card, index) => (
                    <motion.button
                        layoutId={`card-${card.title}`}
                        key={card.title}
                        className="p-4 rounded-lg flex justify-between items-center gap-8 bg-white"
                        onClick={() => setCurrrent(card)}
                    >
                        <div className="flex gap-10">
                            <motion.img
                                layoutId={`cardImage-${card.title}`}
                                alt="image"
                                src={card.src || "/image.png"}
                                className="rounded-lg h-18 w-18 object-cover"
                            ></motion.img>
                            <div className="flex flex-col justify-center items-start gap-2">
                                <motion.h2
                                    layoutId={`cardTitle-${card.title}`}
                                    className="text-lg font-bold text-black"
                                >
                                    {card.title}
                                </motion.h2>
                                <motion.p
                                    layoutId={`cardDesc-${card.title}`}
                                    className="text-neutral-500 text-xs"
                                >
                                    {card.description}
                                </motion.p>
                            </div>
                        </div>

                        <motion.div
                            layoutId={`cardCta-${card.title}`}
                            className="bg-emerald-500 px-4 py-1 rounded-lg"
                        >
                            {card.ctaText}
                        </motion.div>
                    </motion.button>
                ))}
            </div>
        </div>
    );
};

type Card = {
    description: string;
    title: string;
    src: string | undefined;
    ctaText: string;
    ctaLink: string;
    content: () => React.ReactNode;
};

const cards: Card[] = [
    {
        description: "Ed sheeran",
        title: "Perfect",
        src: process.env.NEXT_PUBLIC_IMAGE_URL,
        ctaText: "Play",
        ctaLink: "/",
        content: () => {
            return (
                <p className="text-neutral-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur culpa doloribus dicta magni molestiae
                    necessitatibus, omnis repellendus. Magnam officiis fuga,
                    exercitationem omnis, nulla necessitatibus aperiam
                    distinctio dolores recusandae officia est? Natus saepe
                    dignissimos sequi, dolores tempora exercitationem. Facere,
                    inventore aperiam?
                </p>
            );
        },
    },
    {
        description: "Lana del rey",
        title: "Summertime Sadness",
        src: process.env.NEXT_PUBLIC_IMAGE_URL,
        ctaText: "Play",
        ctaLink: "/",
        content: () => {
            return (
                <p className="text-neutral-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur culpa doloribus dicta magni molestiae
                    necessitatibus, omnis repellendus. Magnam officiis fuga,
                    exercitationem omnis, nulla necessitatibus aperiam
                    distinctio dolores recusandae officia est? Natus saepe
                    dignissimos sequi, dolores tempora exercitationem. Facere,
                    inventore aperiam?
                </p>
            );
        },
    },
    {
        description: "The weekend",
        title: "Blinding Lights",
        src: process.env.NEXT_PUBLIC_IMAGE_URL,
        ctaText: "Play",
        ctaLink: "/",
        content: () => {
            return (
                <p className="text-neutral-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur culpa doloribus dicta magni molestiae
                    necessitatibus, omnis repellendus. Magnam officiis fuga,
                    exercitationem omnis, nulla necessitatibus aperiam
                    distinctio dolores recusandae officia est? Natus saepe
                    dignissimos sequi, dolores tempora exercitationem. Facere,
                    inventore aperiam?
                </p>
            );
        },
    },
    {
        description: "Dua lipa",
        title: "Levitating",
        src: process.env.NEXT_PUBLIC_IMAGE_URL,
        ctaText: "Play",
        ctaLink: "/",
        content: () => {
            return (
                <p className="text-neutral-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur culpa doloribus dicta magni molestiae
                    necessitatibus, omnis repellendus. Magnam officiis fuga,
                    exercitationem omnis, nulla necessitatibus aperiam
                    distinctio dolores recusandae officia est? Natus saepe
                    dignissimos sequi, dolores tempora exercitationem. Facere,
                    inventore aperiam?
                </p>
            );
        },
    },
    {
        description: "Adele",
        title: "Hello",
        src: process.env.NEXT_PUBLIC_IMAGE_URL,
        ctaText: "Play",
        ctaLink: "/",
        content: () => {
            return (
                <p className="text-neutral-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur culpa doloribus dicta magni molestiae
                    necessitatibus, omnis repellendus. Magnam officiis fuga,
                    exercitationem omnis, nulla necessitatibus aperiam
                    distinctio dolores recusandae officia est? Natus saepe
                    dignissimos sequi, dolores tempora exercitationem. Facere,
                    inventore aperiam?
                </p>
            );
        },
    },
];
