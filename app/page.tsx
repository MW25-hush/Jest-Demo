"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { exit } from "process";

const variant = {
  animate: {
    x: [0, 100, 0],
    y: [0, 100, 0],
  },
};
export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        variants={variant}
        initial="initialState"
        animate="animate"
        className="h-20 w-20 bg-red-400"
      ></motion.div>
    </div>
  );
}
