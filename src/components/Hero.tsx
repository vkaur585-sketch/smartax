import { motion } from "framer-motion";
import heroBg from "../../public/heroo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-foreground/70" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-display text-primary-foreground max-w-4xl mx-auto"
        >
          Smartax Counting
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-xl md:text-2xl font-medium italic text-primary-foreground/80 max-w-2xl mx-auto"
        >
          From the Accountants, For the Accountants
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10"
        >
          <a
            href="/contact-us"
            className="inline-flex h-12 items-center px-8 rounded-full bg-primary text-primary-foreground text-base font-medium hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
