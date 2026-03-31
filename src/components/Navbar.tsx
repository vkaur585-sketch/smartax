import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const navItems = [
  { label: "About Us", location: "/about" },
  { label: "Services", location: "/services" },
  { label: "Resources", location: "/resources" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      
      {/* NAVBAR */}
      <nav className="container-main flex items-center justify-between h-16 px-6">
        
        {/* LOGO + NAME */}
        <Link to="/" className="flex items-center gap-2">
  
  <img
    src="/LOGO.png"
    alt="Smartax Logo"
    className="h-10 w-auto object-contain"
  />

  <div className="flex flex-col leading-tight">
    <span className="font-display font-semibold text-foreground text-sm">
      Smartax Counting
    </span>
    <span className="text-[10px] text-muted-foreground tracking-wide">
      From the Accountants, For the Accountants
    </span>
  </div>

</Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.location}
              className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              {item.label}
              <ChevronDown className="w-3.5 h-3.5 opacity-0" />
            </Link>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="hidden lg:block">
          <Link
            to="/contact-us"
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all hover:-translate-y-px active:scale-[0.98]"
            style={{ boxShadow: "var(--shadow-primary)" }}
          >
            Get In Touch
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.location}
                  className="block w-full text-left text-sm font-medium text-foreground/70 py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                to="/contact-us"
                className="block w-full text-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium mt-2"
                onClick={() => setMobileOpen(false)}
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;