import { motion } from "framer-motion";

// const steps = ["Discover", "Strategize", "Onboard", "Deliver", "Scale"];

const AboutSection = () => {
  return (
    <section className="section-padding" id="about">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE */}
          <div>
            <span className="eyebrow">About Us</span>

            <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mt-4 mb-6">
              Building Trust, Delivering Accounting Excellence
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              We provide offshore accounting and finance services to firms that need more hands, more hours,
              or more expertise, without the overhead of hiring full-time staff. From bookkeeping and payroll to
              tax preparation and forensic accounting, we cover the full spectrum. Our team of qualified
              accountants, Chartered Accountants (CAs), and CPAs works as an extension of your firm,
              delivering work that’s accurate, compliant, and audit-ready.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              In short: You get the capacity of a bigger team, without the cost or complexity of building one.
            </p>

            {/* PROCESS STEPS */}
            <div className="flex items-center gap-3 flex-wrap">
              
            </div>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Background glow */}
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl opacity-60" />

            {/* Image card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border bg-card">
              
              <img
                src="/about-image.png"
                alt="Accounting Services"
                className="w-full h-full object-cover"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;