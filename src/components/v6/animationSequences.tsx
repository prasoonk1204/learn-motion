"use client";

import { motion, useAnimate, AnimationSequence } from "motion/react";

export const AnimationSequences = () => {
    const [scope, animate] = useAnimate();

    // const startAnimating = async () => {
    //     animate(
    //         ".text",
    //         {
    //             display: "none",
    //         },
    //         {
    //             duration: 0.05,
    //         },
    //     );
    //     await animate(
    //         "button",
    //         {
    //             width: "5rem",
    //             borderRadius: "100px",
    //         },
    //         {
    //             duration: 0.3,
    //         },
    //     );
    //     animate(
    //         "button",
    //         {
    //             opacity: 1,
    //             scale: [1, 1.2, 0.8, 1],
    //             background: "var(--color-green-500)",
    //         },
    //         {
    //             duration: 0.5,
    //         },
    //     );
    //     animate(
    //         ".check",
    //         {
    //             opacity: 1,
    //         },
    //         {
    //             duration: 0.1,
    //         },
    //     );
    // };

    const sequence: AnimationSequence = [
        [
            ".text",
            {
                display: "none",
            },
            {
                duration: 0.05,
            },
        ],
        [
            "button",
            {
                width: "5rem",
                borderRadius: "100px",
            },
            {
                duration: 0.3,
            },
        ],
        [
            "button",
            {
                opacity: 1,
                scale: [1, 1.2, 0.8, 1],
                background: "var(--color-green-500)",
            },
            {
                duration: 0.5,
            },
        ],
        [
            ".check",
            {
                opacity: 1,
            },
            {
                duration: 0.1,
            },
        ],
    ];

    const startAnimating = async () => {
        animate(sequence);
    };

    return (
        <div
            ref={scope}
            className="relative w-100 h-20 flex items-center justify-center"
        >
            <motion.button
                style={{ width: "24rem" }}
                onClick={startAnimating}
                className="h-20 rounded-full bg-linear-to-r from-teal-600 to-blue-600 text-white font-medium text-2xl py-1 px-8"
            >
                <span className="text">Purchase Now ($69)</span>
            </motion.button>
            <motion.div
                style={{
                    opacity: 0,
                }}
                className="check absolute inset-0 m-auto h-12 w-6 text-5xl z-50"
            >
                v
            </motion.div>
        </div>
    );
};
