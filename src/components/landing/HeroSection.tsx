import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Shield, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16" style={{ background: "var(--hero-gradient)" }}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Trusted by businesses worldwide
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6 text-balance">
              Building Digital Solutions That Deliver{" "}
              <span className="text-primary">Real Results</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              We focus on quality, professionalism, and on-time delivery — every time. From development to marketing, we build what works.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">
                  Get Started <ArrowRight className="ml-1" size={18} />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#portfolio">View Our Work</a>
              </Button>
            </div>
          </motion.div>

          {/* Right — floating cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full h-[420px]">
              <FloatingCard icon={<Code2 size={20} />} title="Expert Development" desc="Web, Mobile & Software" className="absolute top-0 left-8 animate-float" delay={0} />
              <FloatingCard icon={<Shield size={20} />} title="Secure & Reliable" desc="Enterprise-grade quality" className="absolute top-20 right-4 animate-float" delay={1} />
              <FloatingCard icon={<Clock size={20} />} title="On-Time Delivery" desc="Every project, every time" className="absolute bottom-12 left-16 animate-float" delay={2} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FloatingCard = ({ icon, title, desc, className, delay }: { icon: React.ReactNode; title: string; desc: string; className?: string; delay: number }) => (
  <div className={`bg-card rounded-xl p-5 shadow-card-hover border border-border/50 w-64 ${className}`} style={{ animationDelay: `${delay}s` }}>
    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-primary mb-3">{icon}</div>
    <p className="font-semibold text-sm text-foreground">{title}</p>
    <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
  </div>
);

export default HeroSection;
