import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PageTransition = ({ children }: Props) => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.main>
  );
};

export default PageTransition;