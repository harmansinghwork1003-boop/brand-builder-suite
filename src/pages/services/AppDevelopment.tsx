import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Smartphone, ArrowRight, Zap, Shield, BarChart3, Layers, Settings, Users } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const features = [
  { icon: Zap, title: "High Performance", desc: "Fast, smooth, and optimized for every device." },
  { icon: Shield, title: "Secure & Reliable", desc: "Enterprise-grade security and data protection." },
  { icon: Layers, title: "Scalable Architecture", desc: "Built to grow with your business needs." },
  { icon: Settings, title: "Custom Solutions", desc: "Tailored functionality — not off-the-shelf templates." },
  { icon: Users, title: "User-Centric Design", desc: "Intuitive interfaces that users love." },
  { icon: BarChart3, title: "Analytics Built-In", desc: "Track user behavior and app performance." },
];

const capabilities = [
  "Android & iOS Native Apps",
  "Cross-Platform Development",
  "E-Commerce Mobile Apps",
  "Real-Time Features & Chat",
  "Payment Gateway Integration",
  "Push Notifications",
  "Admin Dashboard",
  "API Development",
];

const AppDevelopment = () => (
  <>
    <Navbar />
    <section className="pt-28 pb-20" style={{ background: "var(--hero-gradient)" }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6">
            <Smartphone size={14} /> App Development
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground leading-[1.1] mb-6">
            Apps That <span className="text-primary">Automate & Scale</span> Your Business
          </h1>
          <p className="text-lg text-muted-foreground mb-4">Custom Android & iOS apps built for performance, scalability, and exceptional user experience.</p>
          <p className="text-primary font-semibold mb-8">Projects starting from ₹98,000</p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/#contact">Start Your Project <ArrowRight size={18} className="ml-1" /></Link>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* Features */}
    <section className="py-20 bg-card/50">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-foreground">Why Build With Us?</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <f.icon size={22} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Capabilities */}
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-foreground">What We Can Build</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
          {capabilities.map((c, i) => (
            <motion.div key={c} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="flex items-center gap-3 bg-card border border-border rounded-lg p-4">
              <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <span className="text-sm text-foreground">{c}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-primary/5 border-y border-primary/10">
      <div className="container text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Build Your App?</h2>
        <p className="text-muted-foreground mb-8">Let's turn your idea into a powerful mobile application.</p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/#contact">Get Started <ArrowRight size={18} className="ml-1" /></Link>
        </Button>
      </div>
    </section>
    <Footer />
  </>
);

export default AppDevelopment;
