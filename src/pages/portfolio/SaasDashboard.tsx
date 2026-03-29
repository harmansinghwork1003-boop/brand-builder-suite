import { motion } from "framer-motion";
import { ArrowLeft, BarChart3, Users, Lock, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import mockup from "@/assets/portfolio-saas.jpg";

const highlights = [
  { icon: BarChart3, title: "Real-Time Analytics", desc: "Live dashboards with charts, KPIs, and customizable data visualizations." },
  { icon: Users, title: "Team Management", desc: "Role-based access control with user invitations and permissions." },
  { icon: Lock, title: "Enterprise Security", desc: "End-to-end encryption, SSO integration, and audit logging." },
  { icon: Zap, title: "Fast Performance", desc: "Optimized for speed with lazy loading, caching, and efficient queries." },
];

const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };

const SaasDashboard = () => (
  <>
    <Navbar />
    <section className="pt-28 pb-16" style={{ background: "var(--hero-gradient)" }}>
      <div className="container">
        <Button variant="ghost" size="sm" asChild className="mb-6 text-muted-foreground hover:text-foreground">
          <Link to="/#portfolio"><ArrowLeft size={16} className="mr-1" /> Back to Portfolio</Link>
        </Button>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="max-w-2xl">
          <span className="text-xs text-primary font-semibold uppercase tracking-wider">Website</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2 mb-4">SaaS Dashboard</h1>
          <p className="text-muted-foreground text-lg">A clean, data-rich SaaS dashboard designed for clarity, speed, and actionable insights.</p>
        </motion.div>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container">
        {/* Mockup */}
        <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-16 rounded-2xl overflow-hidden border border-border shadow-[0_8px_40px_-12px_hsl(var(--primary)/0.2)]">
          <img src={mockup} alt="SaaS Dashboard mockup" loading="lazy" width={1280} height={720} className="w-full h-auto" />
        </motion.div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {highlights.map((h, i) => (
            <motion.div key={h.title} initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }}
              className="card-premium p-6 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <h.icon size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">{h.title}</h3>
                <p className="text-muted-foreground text-sm">{h.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default SaasDashboard;
