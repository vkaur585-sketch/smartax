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

            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mt-4 mb-6">
              Building Trust, Delivering Accounting Excellence
            </h2>

            <p className="text-base leading-8 text-foreground/80 mb-6">
  We provide offshore accounting and finance services to firms that need more hands, more hours,
  or more expertise, without the overhead of hiring full-time staff. From bookkeeping and payroll to
  tax preparation and forensic accounting, we cover the full spectrum. Our team of qualified
  accountants, Chartered Accountants (CAs), and CPAs works as an extension of your firm,
  delivering work that’s accurate, compliant, and audit-ready.
</p>

<p className="text-base leading-8 text-foreground/80">
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

      {/* OUR TEAM */}
<section className="mt-28">
  <div className="text-center mb-14">
    <span className="eyebrow">Our Team</span>

    <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mt-4 mb-5">
      The People Behind Smartax Counting
    </h2>

    <p className="text-base leading-7 text-foreground/70 max-w-2xl mx-auto">
      Meet the professionals who bring experience, expertise, and a commitment
      to quality to everything we do.
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* TEAM MEMBER 1 */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group rounded-3xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src="/team-1.png"
          alt="Team Member 1"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      <div className="p-7">
        <div className="w-10 h-1 bg-primary rounded-full mb-4" />

        <h3 className="text-2xl font-semibold text-foreground">
          Team Member Name
        </h3>

        <p className="text-sm font-medium text-primary mt-1 mb-6">
          Designation
        </p>

        <p className="text-base leading-8 text-foreground/75">
          Add the complete biography of the team member here. Since the
          biography is longer, the generous line height and spacing will keep
          the content comfortable to read without making the card feel dense.
        </p>
      </div>
    </motion.div>

    {/* TEAM MEMBER 2 */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="group rounded-3xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src="/team-2.png"
          alt="Team Member 2"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      <div className="p-7">
        <div className="w-10 h-1 bg-primary rounded-full mb-4" />

        <h3 className="text-2xl font-semibold text-foreground">
          Team Member Name
        </h3>

        <p className="text-sm font-medium text-primary mt-1 mb-6">
          Designation
        </p>

        <p className="text-base leading-8 text-foreground/75">
          Add the complete biography of the team member here. Keep the full
          biography visible so visitors can understand the person's
          experience and role within Smartax Counting.
        </p>
      </div>
    </motion.div>

    {/* TEAM MEMBER 3 */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="group rounded-3xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src="/team-3.png"
          alt="Team Member 3"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      <div className="p-7">
        <div className="w-10 h-1 bg-primary rounded-full mb-4" />

        <h3 className="text-2xl font-semibold text-foreground">
          Team Member Name
        </h3>

        <p className="text-sm font-medium text-primary mt-1 mb-6">
          Designation
        </p>

        <p className="text-base leading-8 text-foreground/75">
          Add the complete biography of the team member here. The card layout
          gives longer biographies enough room while maintaining a clean,
          consistent visual structure.
        </p>
      </div>
    </motion.div>
  </div>
</section>
    </section>
  );
};

export default AboutSection;
