import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Target, Zap, CheckCircle2 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const trustPoints = [
  "On-time delivery guarantee",
  "Research-driven strategy",
  "Dedicated project manager",
];

const HeroSection = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      {/* Extra glow orb */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-8 glow-primary-sm">
              <Sparkles size={14} />
              Trusted by businesses across India
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.05] mb-6 text-balance">
              We Don't Just Build —{" "}
              <span className="gradient-text">We Deliver Results</span>{" "}
              That Grow Your Business
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed">
              High-quality, research-driven digital solutions with on-time delivery. Custom solutions, not templates.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
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

            {/* Trust points */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  {point}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full h-[460px]">
              <FloatingCard icon={<Target size={22} />} title="Results-Focused" desc="Strategy that drives growth" className="absolute top-0 left-8 animate-float" delay={0} />
              <FloatingCard icon={<Zap size={22} />} title="Fast & Reliable" desc="On-time, every time" className="absolute top-24 right-0 animate-float" delay={1} />
              <FloatingCard icon={<Sparkles size={22} />} title="Premium Quality" desc="Enterprise-grade execution" className="absolute bottom-8 left-12 animate-float" delay={2} />
              {/* Glow orbs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-[80px]" />
              <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/15 rounded-full blur-[60px]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FloatingCard = ({ icon, title, desc, className, delay }: { icon: React.ReactNode; title: string; desc: string; className?: string; delay: number }) => (
  <div className={`card-premium p-6 w-72 backdrop-blur-sm ${className}`} style={{ animationDelay: `${delay}s` }}>
    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3 glow-primary-sm">{icon}</div>
    <p className="font-bold text-sm text-foreground">{title}</p>
    <p className="text-xs text-muted-foreground mt-1">{desc}</p>
  </div>
);

export default HeroSection;
