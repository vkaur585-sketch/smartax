import { Mail, MapPin, Facebook, Linkedin, Instagram, Youtube } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Financial Reporting",
  "Bookkeeping",
  "Tax Preparation",
  "Payroll Management",
  "Crypto Accounting",
  "Data Conversion",
];

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (loading) return;
  
    setLoading(true);
  
    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbz-MKoq5gqgaunqnT0BQE8dpp-_1wV9KDHBDOYkONEFMSwLCnCbCwidUPibi1-_CPtwOA/exec", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8", 
        },
        body: JSON.stringify(form),
      });
  
      if (!res.ok) {
        throw new Error("Failed to submit");
      }
  
      toast({
        title: "Message sent!",
        description: "We'll get back to you shortly.",
      });
  
      setForm({
        fullName: "",
        organization: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
  
    } catch (err) {
      toast({
        title: "Error",
        description: "Something went wrong.",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="section-padding bg-foreground text-background" id="contact-form">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
              Get in Touch
            </h2>
            <p className="text-sm opacity-60 leading-relaxed max-w-md mb-10">
              Fill out the form and let us know how we can help. Whether it's a quick question or a
              detailed project inquiry, we'll make sure you get clear answers.
            </p>

            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Email Address</h4>
                  <p className="text-sm opacity-60">vimal@smartax.co.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Office Location</h4>
                  <p className="text-sm opacity-60">
                    Plot No. 1073, Sector-82, JLPL, Industrial Area<br />
                    Mohali, Punjab, 140306
                  </p>
                </div>
              </div>
            </div>

            
          </div>

          {/* Right side - Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-semibold mb-1.5 block">
                  Full name <span className="text-primary">*</span>
                </label>
                <Input
                  required
                  maxLength={100}
                  placeholder="e.g., John Doe"
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/40"
                />
              </div>
              <div>
                <label className="text-sm font-semibold mb-1.5 block">
                  Organization <span className="text-primary">*</span>
                </label>
                <Input
                  required
                  maxLength={100}
                  placeholder="Company Name"
                  value={form.organization}
                  onChange={(e) => setForm({ ...form, organization: e.target.value })}
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/40"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-semibold mb-1.5 block">
                  Work email address <span className="text-primary">*</span>
                </label>
                <Input
                  required
                  type="email"
                  maxLength={255}
                  placeholder="name@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/40"
                />
              </div>
              <div>
                <label className="text-sm font-semibold mb-1.5 block">
                  Phone number <span className="text-primary">*</span>
                </label>
                <Input
                  required
                  type="tel"
                  maxLength={20}
                  placeholder="Full Number (incl. prefix)"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/40"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold mb-1.5 block">
                Select Service <span className="text-primary">*</span>
              </label>
              <select
                required
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="flex h-10 w-full rounded-md border bg-background/10 border-background/20 text-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="" disabled className="text-foreground">Select Service*</option>
                {services.map((s) => (
                  <option key={s} value={s} className="text-foreground">{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold mb-1.5 block">
                How we can help you? <span className="text-primary">*</span>
              </label>
              <Textarea
                required
                maxLength={1000}
                placeholder="Let us know what you need."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="bg-background/10 border-background/20 text-background placeholder:text-background/40 min-h-[120px]"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="bg-destructive hover:bg-destructive/90 text-destructive-foreground px-8 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Submit"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

// Simple X (Twitter) icon since lucide doesn't have the new X logo
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default ContactSection;
