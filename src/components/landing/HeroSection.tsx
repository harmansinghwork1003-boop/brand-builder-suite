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
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-8">
              <Sparkles size={14} />
              Trusted by businesses across India
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight text-foreground leading-[1.05] mb-6 text-balance">
              We Build Digital Systems That{" "}
              <span className="gradient-text">Generate Real</span>{" "}
              Business Growth
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Strategy-first development, marketing, and automation — engineered to deliver measurable ROI, not just a website.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button variant="hero" size="lg" className="btn-pulse" asChild>
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
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full h-[460px]">
              <FloatingCard icon={<Target size={22} />} title="Results-Focused" desc="Strategy that drives growth" className="absolute top-0 left-8 animate-float-gentle" />
              <FloatingCard icon={<Zap size={22} />} title="Fast & Reliable" desc="On-time, every time" className="absolute top-24 right-0 animate-float-gentle [animation-delay:3s]" />
              <FloatingCard icon={<Sparkles size={22} />} title="Premium Quality" desc="Enterprise-grade execution" className="absolute bottom-8 left-12 animate-float-gentle [animation-delay:6s]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/8 rounded-full blur-[80px]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FloatingCard = ({ icon, title, desc, className }: { icon: React.ReactNode; title: string; desc: string; className?: string }) => (
  <div className={`bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl p-6 w-72 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_30px_-8px_hsl(var(--primary)/0.2)] hover:border-primary/20 ${className}`}>
    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">{icon}</div>
    <p className="font-bold text-sm text-foreground">{title}</p>
    <p className="text-xs text-muted-foreground mt-1">{desc}</p>
  </div>
);

export default HeroSection;
