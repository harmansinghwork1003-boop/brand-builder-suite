import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Target, Zap } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const HeroSection = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6">
              <Sparkles size={14} />
              Trusted by businesses across India
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6 text-balance">
              We Don't Just Build — We Deliver Results That{" "}
              <span className="text-primary">Grow Your Business</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              High-quality, research-driven digital solutions with on-time delivery. Custom solutions, not templates.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                {isHome ? (
                  <a href="#contact">
                    Get Started <ArrowRight className="ml-1" size={18} />
                  </a>
                ) : (
                  <Link to="/#contact">
                    Get Started <ArrowRight className="ml-1" size={18} />
                  </Link>
                )}
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                {isHome ? (
                  <a href="#portfolio">View Our Work</a>
                ) : (
                  <Link to="/#portfolio">View Our Work</Link>
                )}
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full h-[420px]">
              <FloatingCard icon={<Target size={20} />} title="Results-Focused" desc="Strategy that drives growth" className="absolute top-0 left-8 animate-float" delay={0} />
              <FloatingCard icon={<Zap size={20} />} title="Fast & Reliable" desc="On-time, every time" className="absolute top-20 right-4 animate-float" delay={1} />
              <FloatingCard icon={<Sparkles size={20} />} title="Premium Quality" desc="Enterprise-grade execution" className="absolute bottom-12 left-16 animate-float" delay={2} />
              {/* Glow orb */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FloatingCard = ({ icon, title, desc, className, delay }: { icon: React.ReactNode; title: string; desc: string; className?: string; delay: number }) => (
  <div className={`bg-card rounded-xl p-5 shadow-card-hover border border-border/50 w-64 backdrop-blur-sm ${className}`} style={{ animationDelay: `${delay}s` }}>
    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">{icon}</div>
    <p className="font-semibold text-sm text-foreground">{title}</p>
    <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
  </div>
);

export default HeroSection;
