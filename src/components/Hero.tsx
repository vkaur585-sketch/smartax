import { motion } from "framer-motion";
const heroBg = "/heroo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-foreground/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">

        {/* 🔥 LOGO */}
        <motion.img
          src="/LOGO.png"
          alt="Smartax Logo"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 h-40 md:h-40 object-contain"
        />

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-display text-primary-foreground max-w-4xl mx-auto"
        >
          <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-display text-primary-foreground max-w-4xl mx-auto"
>
  Smar
  <span className="text-green-300 drop-shadow-[0_0_10px_rgba(34,197,94,0.6)]">
    tax
  </span>{" "}
  Counting
</motion.h1>
        </motion.h1>

        {/* TAGLINE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-xl md:text-2xl font-medium italic text-primary-foreground/80 max-w-2xl mx-auto"
        >
          From the Accountants, For the Accountants
        </motion.p>

        {/* BUTTON */}
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