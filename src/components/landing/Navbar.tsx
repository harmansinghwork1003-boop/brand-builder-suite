import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";

const services = [
  { label: "Website Development", href: "/services/website-development" },
  { label: "Social Media Management", href: "/services/social-media-management" },
  { label: "SEO", href: "/services/seo" },
  { label: "App Development", href: "/services/app-development" },
];

const navLinks = [
  { label: "Why Us", href: "/#why-us" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Process", href: "/#process" },
  { label: "Testimonials", href: "/#testimonials" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const isHome = location.pathname === "/";

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("/#") && isHome) {
      const el = document.querySelector(href.replace("/", ""));
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/40">
      <div className="container flex items-center justify-between h-18 py-4">
        <Link to="/" className="text-xl font-extrabold tracking-tight text-foreground">
          Makes & Made<span className="text-primary"> Developers</span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-7">
          {/* Services dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Services <ChevronDown size={14} />
            </button>
            <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-[250ms] ease-out">
              <div className="card-premium p-2 min-w-[240px]">
                {services.map((s) => (
                  <Link key={s.href} to={s.href} className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-colors">
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.map((l) =>
            l.href.startsWith("/#") ? (
              isHome ? (
                <a key={l.href} href={l.href.replace("/", "")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  {l.label}
                </a>
              ) : (
                <Link key={l.href} to={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  {l.label}
                </Link>
              )
            ) : (
              <Link key={l.href} to={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </Link>
            )
          )}

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-[350ms]"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Button size="sm" asChild>
            {isHome ? (
              <a href="#contact">Get Started</a>
            ) : (
              <Link to="/#contact">Get Started</Link>
            )}
          </Button>
        </div>

        {/* Mobile */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-xl text-muted-foreground hover:text-foreground"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl px-6 pb-6 pt-3 space-y-1">
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="flex items-center justify-between w-full text-sm font-medium text-muted-foreground hover:text-foreground py-2.5"
          >
            Services <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
          </button>
          {servicesOpen && (
            <div className="pl-4 space-y-1">
              {services.map((s) => (
                <Link key={s.href} to={s.href} onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground py-2">
                  {s.label}
                </Link>
              ))}
            </div>
          )}
          {navLinks.map((l) =>
            l.href.startsWith("/#") && isHome ? (
              <a key={l.href} href={l.href.replace("/", "")} onClick={() => handleNavClick(l.href)} className="block text-sm font-medium text-muted-foreground hover:text-foreground py-2.5">
                {l.label}
              </a>
            ) : (
              <Link key={l.href} to={l.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-muted-foreground hover:text-foreground py-2.5">
                {l.label}
              </Link>
            )
          )}
          <Button size="sm" className="w-full mt-3" asChild>
            {isHome ? (
              <a href="#contact" onClick={() => setOpen(false)}>Get Started</a>
            ) : (
              <Link to="/#contact" onClick={() => setOpen(false)}>Get Started</Link>
            )}
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
