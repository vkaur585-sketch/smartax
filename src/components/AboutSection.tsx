import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="section-padding" id="about">
      <div className="container-main">
        {/* ================= ABOUT ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <div>
            <span className="eyebrow">About Us</span>

            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mt-4 mb-6">
              Building Trust, Delivering Accounting Excellence
            </h2>

            <p className="text-base leading-8 text-foreground/80 mb-6">
              We provide offshore accounting and finance services to firms that
              need more hands, more hours, or more expertise, without the
              overhead of hiring full-time staff. From bookkeeping and payroll
              to tax preparation and forensic accounting, we cover the full
              spectrum. Our team of qualified accountants, Chartered
              Accountants (CAs), and CPAs works as an extension of your firm,
              delivering work that’s accurate, compliant, and audit-ready.
            </p>

            <p className="text-base leading-8 text-foreground/80">
              In short: You get the capacity of a bigger team, without the cost
              or complexity of building one.
            </p>
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

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* ================= OUR TEAM ================= */}
        <section className="mt-28">
          {/* TEAM HEADING */}
          <div className="text-center mb-14">
            <span className="eyebrow">Our Team</span>

            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mt-4 mb-5">
              The People Behind Smartax Counting
            </h2>

            <p className="text-base leading-7 text-foreground/70 max-w-2xl mx-auto">
              Meet the professionals who bring experience, expertise, and a
              commitment to quality to everything we do.
            </p>
          </div>

          {/* TEAM GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {/* ================= VIMAL VERMA ================= */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group rounded-3xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Portrait */}
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src="/ChatGPT Image Sep 1, 2026, 01_12_02 PM.png"
                  alt="Vimal Verma"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Content */}
              <div className="p-7 lg:p-8">
                <div className="w-12 h-1 bg-primary rounded-full mb-5" />

                <h3 className="text-2xl font-semibold text-foreground">
                  Vimal Verma
                </h3>

                <p className="text-base font-medium text-primary mt-1 mb-7">
                  Founder & Director
                </p>

                <div className="space-y-5">
                  <p className="text-base leading-8 text-foreground/75">
                    Vimal Verma is the Founder and Director of Smartax Accounting Private Limited, 
                    with over 30 years of experience in accounting, taxation, financial compliance, and outsourcing.
                  </p>

                  <p className="text-base leading-8 text-foreground/75">
                    A Chartered Accountant (Inter) since 1992, he holds a Bachelor of Commerce from Panjab 
                    University and a Master of Commerce from Himachal Pradesh University.
                  </p>

                  <p className="text-base leading-8 text-foreground/75">
                    Vimal began his career in Indian taxation, spending over 12 years advising businesses before entering the accounting
                    outsourcing industry in 2007. He was among the early pioneers of finance and accounting outsourcing in the
                    Chandigarh region and played a key role in building high-performing offshore accounting operations for international firms.
                  </p>

                  <p className="text-base leading-8 text-foreground/75">
                    At Smartax Accounting, Vimal leads with a focus on trust, quality, and long-term partnerships,
                    delivering scalable offshore accounting solutions to clients across New Zealand, Australia, the UK, and the USA.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ================= SHAN SINGH ================= */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group rounded-3xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Portrait */}
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src="/ChatGPT Image Sep 1, 2026, 01_14_34 PM.png"
                  alt="Shan Singh"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Content */}
              <div className="p-7 lg:p-8">
                <div className="w-12 h-1 bg-primary rounded-full mb-5" />

                <h3 className="text-2xl font-semibold text-foreground">
                  Shan Singh
                </h3>

                <p className="text-base font-medium text-primary mt-1 mb-7">
                  Co-Founder & Director
                </p>

                <div className="space-y-5">
                  <p className="text-base leading-8 text-foreground/75">
                    Shan Singh is the Co-Founder and Director of Smartax
                    Accounting Private Limited. He holds a Bachelor of Commerce
                    from Panjab University, Chandigarh, and an MBA in Finance.
                  </p>

                  <p className="text-base leading-8 text-foreground/75">
                    With over 30 years of experience in accounting and 20 years
                    in the outsourcing industry, Shan has been working with UK
                    accounting firms since 2006. He has extensive expertise in
                    UK accounting and compliance, including bookkeeping,
                    financial reporting, payroll, VAT/GST, income tax, annual
                    accounts, and year-end compliance.
                  </p>

                  <p className="text-base leading-8 text-foreground/75">
                    Shan possesses a strong understanding of UK accounting
                    practices and regulatory requirements. He plays a key role
                    in building and maintaining client relationships, ensuring
                    high-quality service delivery, and supporting clients with
                    reliable and efficient accounting solutions. His practical
                    experience, technical expertise, and client-focused
                    approach have been instrumental in delivering value to
                    businesses across the UK.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ================= SANDEEP SHARMA ================= */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group rounded-3xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1"
            >
              {/* Portrait */}
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src="/ChatGPT Image Sep 1, 2026, 01_13_22 PM.png"
                  alt="Sandeep Sharma"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Content */}
              <div className="p-7 lg:p-8">
                <div className="w-12 h-1 bg-primary rounded-full mb-5" />

                <h3 className="text-2xl font-semibold text-foreground">
                  Sandeep Sharma
                </h3>

                <p className="text-base font-medium text-primary mt-1 mb-7">
                  General Manager
                </p>

                <div className="space-y-5">
                  <p className="text-base leading-8 text-foreground/75">
                    Sandeep Sharma is the General Manager at Smartax Accounting
                    Private Limited. He qualified as a Chartered Accountant
                    (Inter) in 1992 and holds a Bachelor of Commerce degree from
                    Panjab University, Chandigarh.
                  </p>

                  <p className="text-base leading-8 text-foreground/75">
                    With over 30 years of experience in accounting, including 6
                    years of specialised experience in US accounting, Sandeep
                    has developed strong expertise in US accounting and
                    compliance. His areas of specialisation include
                    bookkeeping, financial reporting, payroll, sales tax,
                    income tax, annual accounts, and year-end compliance.
                  </p>

                  <p className="text-base leading-8 text-foreground/75">
                    Sandeep is known for his technical knowledge, attention to
                    detail, and commitment to delivering accurate and timely
                    financial solutions. He plays a key role in ensuring
                    high-quality service delivery and supporting clients with
                    efficient and compliant accounting and financial reporting
                    services.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutSection;
