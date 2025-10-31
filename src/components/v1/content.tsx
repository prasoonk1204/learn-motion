"use client";

import { easeInOut, motion } from "motion/react";

export const V1content = () => {
    return (
        <div className="[perspective::1000px] [transform-style::preserve-3d] h-screen w-full bg-zinc-900 flex justify-center items-center">
            <motion.button      // any component can be turned into a motion component
                initial={{ opacity: 0, y:20, filter: "blur(10px)" }}  // initial state of the animation
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}  // defines the animation to be applied
                // exit={} // defines the exit state of the animation
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                }} // manages the transition of the animation
                whileHover={{
                    rotateX: 20,
                    rotateY: 10,
                    boxShadow: "0 20px 50px rgba(8,112,184,0.7)",
                }} // animation to apply when the component is hovered
                whileTap={{
                    rotateX: 0,
                }} // animation to apply when the component is clicked
                style={{ translateZ: 100 }} // moves the component closer to the viewer, cause we are in 3D space
                className="relative group text-xl bg-zinc-950 px-12 py-4 rounded-2xl shadow-[0_1px_4px_0_rgba(255,255,255,0.2)_inset] hover:text-blue-400 duration-300 transition-colors"
            >
                Explore
                <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-px bg-linear-to-r from-transparent via-blue-400 to-transparent h-px w-3/4 mx-auto"></span>
                <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-0 bg-linear-to-r from-transparent via-blue-400 to-transparent h-1 w-full mx-auto blur-md"></span>
            </motion.button>
        </div>
    );
};
