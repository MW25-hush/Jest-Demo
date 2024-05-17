"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <motion.h1
        className="bg-cyan-500 py-2 px-4 text-[2rem]"
        animate={{ fontSize: 10, color: "#ff2994", x: 100, y: 100 }}
      >
        Home
      </motion.h1>

      <section>
        <p>Text String Test</p>
      </section>

      <motion.div>
        <button onClick={() => setVisible(true)}>Show Heading</button>
        {visible && <h1>This is a visible heading</h1>}
      </motion.div>
    </div>
  );
}
