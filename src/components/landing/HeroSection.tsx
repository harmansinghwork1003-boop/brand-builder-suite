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

            <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.08] mb-6 text-balance">
              We Build Digital Systems That{" "}
              <span className="gradient-text">Generate Real</span>{" "}
              Business Growth
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Strategy-first development, marketing, and automation — engineered to deliver measurable ROI, not just a website.
            </motion.p>

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

          <div className="hidden lg:flex flex-col gap-5">
            {[
              { icon: <Target size={22} />, title: "Results-Focused", desc: "Strategy that drives growth", delay: 0.2 },
              { icon: <Zap size={22} />, title: "Fast & Reliable", desc: "On-time, every time", delay: 0.3 },
              { icon: <Sparkles size={22} />, title: "Premium Quality", desc: "Enterprise-grade execution", delay: 0.4 },
            ].map((card) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: card.delay, ease: "easeOut" }}
                className="bg-card/60 backdrop-blur-xl border border-border/40 rounded-2xl p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_30px_-8px_hsl(var(--primary)/0.25)] hover:border-primary/30"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">{card.icon}</div>
                  <div>
                    <p className="font-bold text-sm text-foreground">{card.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
