"use client";

import { useAnimate, motion, stagger } from "motion/react";
import { useEffect } from "react";

export const AnimatedText = () => {
    const [scope, animate] = useAnimate();

    const text =
        "There’s no way we could meet. But one thing is certain. If we see each other, we’ll know. That you were the one who was inside me. That I was the one who was inside you.";

    // text animation on load
    useEffect(() => {
        startAnimating();
    }, []);

    const startAnimating = () => {
        animate(
            "span",
            {
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
            },
            {
                duration: 0.5,
                ease: "easeInOut",
                delay: stagger(0.02),
            },
        );
    };

    return (
        <div ref={scope} className="max-w-4xl text-4xl mx-auto tracking-wide text-center">

            {/* the animated text can be done using button click as well */}
            {/* <button
                className="bg-zinc-800 px-4 py-1 rounded-2xl text-2xl block mb-4 active:scale-110 transition duration-200 cursor-pointer"
                onClick={startAnimating}
            >
                Animate Text
            </button> */}

            {/* <motion.span style={{ opacity: 0 }} className="inline-block">
                {text}
            </motion.span> */}

            {text.split(" ").map((word, index) => (
                <motion.span
                    key={index}
                    style={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                    className="inline-block"
                >
                    {word}&nbsp;
                </motion.span>
            ))}
        </div>
    );
};
