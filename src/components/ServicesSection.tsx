import { motion } from "framer-motion";
import { FileText, Receipt, BookOpen, CalendarCheck, Calculator, CheckCheck } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Accurate Financial Reporting, Delivered On Time",
    desc: `Work with professionals who get the precision and compliance you deserve, every single reporting cycle.

    Transform your practice with consistent financial reporting support that goes beyond number-crunching. Smartax delivers statements that are accurate, compliant, and always on time, aligned with international standards, so you can stay focused on the advisory work that moves the needle. From monthly management reports to year-end financials, our seasoned team integrates seamlessly into your workflow, maintaining consistent quality across your entire client base. Whether you’re navigating GAAP, IFRS, or local frameworks, we bring the steadiness and know-how your firm needs to grow with confidence.
    
    Accounting should empower, not overwhelm. Our team blends precision with practical insight to keep your finances simple, smart, and future-ready.`
  },
  {
    icon: Receipt,
    title: "GST & VAT Return",
    desc: `Work with a team that treats compliance deadlines like the non-negotiables they are, because your reputation depends on it.

    GST and VAT compliance doesn’t leave room for error. Miss a deadline, file incorrectly, or misclassify a transaction, and your clients face penalties while your firm manages the fallout. Smartax removes that risk entirely. We handle end-to-end GST/VAT return preparation, reconciliation, and lodgement across New Zealand, Australia, US, UK, Canada, and beyond, delivering accurate, authority-ready submissions well before deadlines hit. Your clients stay compliant, your team stops firefighting at month-end, and your practice builds a reputation for reliability that becomes your competitive edge in a market where compliance failures can cost clients dearly and damage professional relationships permanently.`
  },
  {
    icon: BookOpen,
    title: "Book-keeping",
    desc: `Let qualified professionals handle your books while you focus on what you do best, growing your practice and serving clients.

    Running a CA or CPA firm means managing your own books on top of your clients’. Late-night data entry, chasing receipts, reconciling accounts, it’s endless. Smartax delivers comprehensive outsourced bookkeeping services that keep your financial records accurate, up to date, and compliant without taking your team away from billable work. From daily transaction recording to month-end reconciliations and financial reporting, we handle the full spectrum so your practice operates on clean data, clear insights, and zero backlog. Whether you need ongoing support or project-based cleanup, our team integrates seamlessly with your systems, maintaining the accuracy and timeliness your practice depends on for strategic decisions and regulatory peace of mind.`
  },
  {
    icon: CalendarCheck,
    title: "Year-End Accounting",
    desc: `Year-end closing isn’t just about balancing numbers; it’s about audit readiness, tax optimization, regulatory compliance, and setting the foundation for the year ahead. One missed adjustment, one overlooked accrual, or just one compliance gap creates problems that compound through tax filings, audits, and strategic planning. We bring to you comprehensive year-end accounting services that transform the most stressful period in your practice calendar into a systematic, predictable process. From extended trial balance preparation and adjusting entries to working papers, ledger scrutiny, and FRS-compliant financial reporting, we handle the technical heavy lifting with precision. Your practice meets every deadline comfortably, your clients receive accurate year-end financials, and your team avoids the exhaustion and errors that plague year- end when capacity is stretched thin and accuracy cannot be compromised.`
  },
  {
    icon: Calculator,
    title: "Tax Preparation and Filing",
    desc: `We deliver comprehensive tax preparation and filing services that transform your firm’s busiest period from survival mode into a strategic opportunity. We handle everything from document compilation and complex calculations to multi-jurisdiction filings and post-filing amendments, ensuring every return meets professional standards, regulatory requirements, and your quality expectations. Our experienced tax professionals become your behind-the-scenes engine, processing returns with accuracy and speed that keeps engagements profitable, deadlines met, and your team operating at capacity without breaking under pressure. Focus on client relationships and advisory services that differentiate your practice. Let us handle the preparation work that consumes hours but doesn’t advance client relationships or firm reputation.`
  },
  {
    icon: CheckCheck,
    title: "Quality Control",
    desc: `When you trust us with your numbers, you expect more than speed. You expect accuracy, consistency, and zero surprises.That’s exactly what you get. Every task we complete undergoes a structured, two-tier quality control process, built on ISO & SOC 2 certified systems and proven best practices. Because when it comes to your accounting, payroll, or compliance, “good enough” isn’t in our vocabulary.`
  }
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-secondary/50" id="services">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">Services</span>
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mt-4 mb-4">
            What We Can Help You With
          </h2>
          <p className="text-lg leading-8 text-foreground/80 mb-6">
            Comprehensive accounting services from bookkeeping and tax
            preparation to financial reporting and payroll — helping firms
            scale efficiently while maintaining quality.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-1 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="group card-surface p-8 hover:shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_8px_24px_-8px_rgba(0,0,0,0.1)] transition-all duration-200 relative overflow-hidden"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
            <div className="absolute top-0 left-0 w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-300" />

            <div className="flex items-start gap-4 mb-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-xl font-semibold text-foreground leading-tight">
                {service.title}
              </h3>
            </div>
              <p className="text-base leading-8 text-foreground/80 mb-6">{service.desc}</p>
              {/* <button className="inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Read more <ArrowRight className="w-3 h-3" />
              </button> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
