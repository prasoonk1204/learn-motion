"use client";

import {
    motion,
    useMotionTemplate,
    useMotionValueEvent,
    useScroll,
    useSpring,
    useTransform,
} from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";

type Feature = {
    content: React.ReactNode;
    title: string;
    desc: string;
};

const features: Feature[] = [
    {
        content: (
            <div>
                <Image
                    src={process.env.NEXT_PUBLIC_IMAGE_URL || "/image.png"}
                    height={250}
                    width={500}
                    alt="image"
                />
            </div>
        ),
        title: "abcdfpajf",
        desc: "faefseibge eis gs susbvs vunzisdv ",
    },
    {
        content: (
            <div>
                <Image
                    src={process.env.NEXT_PUBLIC_IMAGE_URL || "/image.png"}
                    height={250}
                    width={500}
                    alt="image"
                />
            </div>
        ),
        title: "abcdfpvsajf",
        desc: "faefseibge eis gs susbvs vunzisdv ",
    },
    {
        content: (
            <div>
                <Image
                    src={process.env.NEXT_PUBLIC_IMAGE_URL || "/image.png"}
                    height={250}
                    width={500}
                    alt="image"
                />
            </div>
        ),
        title: "abcdfpvdssajf",
        desc: "faefseibge eis gs susbvs vunzisdv ",
    },
];

export const V4content = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const backgrounds = ["#171717", "#0f172a", "#1e293b"];

    const [background, setBackground] = useState(backgrounds[0]);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const finalValue = Math.floor(latest * backgrounds.length);
        setBackground(backgrounds[finalValue]);
    });

    return (
        <motion.div
            ref={containerRef}
            animate={{
                background,
            }}
            transition={{
                duration: 1,
                ease: "easeInOut",
            }}
            className="flex min-h-screen w-full bg-zinc-950 justify-center items-center"
        >
            <div className="flex flex-col gap-100 max-w-4xl">
                {features.map((feature, id) => {
                    return <Card feature={feature} key={id} />;
                })}
            </div>
        </motion.div>
    );
};

const Card = ({ feature }: { feature: Feature }) => {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const translateContent = useSpring(
        useTransform(scrollYProgress, [0, 1], [-200, 200]),
        {
            stiffness: 100,
            damping: 30,
            mass: 1,
        },
    );
    const opacityContent = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [0, 1, 0],
    );
    // const blurContent = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [20, 0, 0, 20])
    const blurContent = useTransform(scrollYProgress, [0.5, 1], [0, 20]);
    const scaleContent = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [0.8, 1, 0.8],
    );

    return (
        <div
            ref={ref}
            key={feature.title}
            className="grid grid-cols-2 items-center py-30 h-screen"
        >
            <motion.div
                style={{
                    filter: useMotionTemplate`blur(${blurContent}px)`,
                    scale: scaleContent,
                }}
            >
                <h1 className="text-4xl">{feature.title}</h1>
                <p className="text-lg">{feature.desc}</p>
            </motion.div>
            <motion.div
                style={{
                    y: translateContent,
                    opacity: opacityContent,
                    filter: useMotionTemplate`blur(${blurContent}px)`,
                }}
            >
                {feature.content}
            </motion.div>
        </div>
    );
};
