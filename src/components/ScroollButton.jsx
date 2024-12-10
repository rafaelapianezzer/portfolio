import React from 'react';
import { motion } from 'framer-motion';

export const ScrollButton = () => {
  return (
    <div className="flex justify-center items-center mt-20 mb-12">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.span
          className="text-sm text-neutral-400 dark:text-neutral-50 mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Scroll
        </motion.span>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 10 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.5,
          }}
        >
          <i className="fa-solid fa-arrow-down text-xl text-neutral-400 dark:text-neutral-5"></i>
        </motion.div>
      </motion.div>
    </div>
  );
};
