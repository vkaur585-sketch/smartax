import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, Link } from "react-router-dom";

const navItems = [
  { label: "About Us", location: "/about" },
  { label: "Services", location: "/services" },
  // { label: "Resources", location: "/resources" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 40);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <header
  className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${
    scrolled
      ? "bg-background/95 border-border shadow-sm"
      : "bg-background/80 border-transparent"
  }`}
>
      
      {/* NAVBAR */}
      <nav
        className={`container-main flex items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "h-14" : "h-16"
        }`}
      >
        
        {/* LOGO + NAME */}
        <NavLink
  to="/"
  className={({ isActive }) =>
    `flex items-center gap-2 transition-opacity ${
      isActive ? "opacity-100" : "opacity-90 hover:opacity-100"
    }`
  }
>
  
  <img
    src="/LOGO.png"
    alt="Smartax Logo"
    className={`w-auto object-contain transition-all duration-300 ${
      scrolled ? "h-8" : "h-10"
    }`}
  />

    <div
      className={`flex flex-col leading-tight transition-all duration-300 ${
        scrolled ? "scale-95" : "scale-100"
      }`}
    >
    <span className="font-display font-semibold text-foreground text-sm">
      Smartax Counting
    </span>
    <span className="text-[10px] text-muted-foreground tracking-wide">
      From the Accountants, For the Accountants
    </span>
  </div>

</NavLink>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-8">
                {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.location}
            className={({ isActive }) =>
              `relative text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "text-primary"
                  : "text-foreground/70 hover:text-foreground"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {item.label}

                <span
                  className={`absolute left-1/2 -translate-x-1/2 -bottom-1 h-[2px] rounded-full bg-primary transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </>
            )}
          </NavLink>
        ))}
        </div>

        {/* CTA BUTTON */}
        <div className="hidden lg:block">
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            `block w-full text-center px-5 py-2.5 rounded-lg text-sm font-medium mt-2 transition-colors ${
              isActive
                ? "bg-primary text-primary-foreground"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            }`
          }
          onClick={() => setMobileOpen(false)}
        >
          Get In Touch
        </NavLink>
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
              <NavLink
                key={item.label}
                to={item.location}
                className={({ isActive }) =>
                  `block w-full py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground"
                  }`
                }
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}

              <NavLink
                to="/contact-us"
                className="block w-full text-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium mt-2"
                onClick={() => setMobileOpen(false)}
              >
                Get In Touch
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;