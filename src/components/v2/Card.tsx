"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const Card = () => {
    const [open, setOpen] = useState(true);

    return (
        <>
            <AnimatePresence>   // requied directly above the conditional rendering component on while exit animation is being used
                {open && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.95,
                            filter: "blur(10px)",
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            filter: "blur(0px)",
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.95,
                            filter: "blur(10px)",
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                        }}
                        className="w-88 h-112 rounded-2xl text-black shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] p-6 flex flex-col"
                    >
                        <h2 className="font-semibold text-sm">UI Components</h2>
                        <p className="text-xs text-zinc-600 mt-2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit.
                        </p>
                        <div className="flex justify-center items-center">
                            <button
                                onClick={() => setOpen(false)}
                                className="shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] px-2 text-sm py-1 rounded-md"
                            >
                                UI{" "}
                                <span className="text-lg text-zinc-400">x</span>
                            </button>
                        </div>
                        <div className="bg-zinc-300 flex-1 mt-4 rounded-lg relative">
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    scale: 0.95,
                                    filter: "blur(10px)",
                                }}
                                whileHover={{
                                    opacity: 1,
                                    scale: 1,
                                    filter: "blur(0px)",
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeInOut",
                                }}
                                className="inset-0 absolute h-full w-full bg-zinc-100 rounded-lg divide-y divide-zinc-300"
                            >
                                <div className="p-4 flex items-start">abcd</div>
                                <div className="p-4 flex items-start">abcd</div>
                                <div className="p-4 flex items-start">abcd</div>
                                <div className="p-4 flex items-start">abcd</div>
                                <div className="p-4 flex items-start">abcd</div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
