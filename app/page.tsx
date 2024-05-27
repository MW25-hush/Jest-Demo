"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const LayoutExample = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="container">
      <motion.div
        layout
        className="box"
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          width: isExpanded ? 300 : 100,
          height: isExpanded ? 300 : 100,
          backgroundColor: "cyan",
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        Click Me
      </motion.div>
    </div>
  );
};

export default LayoutExample;
