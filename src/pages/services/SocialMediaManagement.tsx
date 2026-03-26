import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Megaphone, FileText, Video, BarChart3, Users, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const benefits = [
  { icon: FileText, title: "Custom Content Creation", desc: "Posts, carousels, and graphics tailored to your brand voice." },
  { icon: Video, title: "Reels & Video Content", desc: "Engaging short-form videos that boost reach and engagement." },
  { icon: Users, title: "Community Engagement", desc: "Active audience interaction to build loyal followers." },
  { icon: BarChart3, title: "Strategy & Analytics", desc: "Data-driven strategies with monthly performance reports." },
];

const process = [
  { step: "01", title: "Brand Analysis", desc: "We study your brand, audience, and competitors." },
  { step: "02", title: "Content Strategy", desc: "We create a monthly content calendar aligned with your goals." },
  { step: "03", title: "Content Creation", desc: "Design posts, write captions, produce reels." },
  { step: "04", title: "Publish & Engage", desc: "Schedule content and actively engage with your audience." },
  { step: "05", title: "Report & Optimize", desc: "Monthly analytics reports with strategy adjustments." },
];

const SocialMediaManagement = () => (
  <>
    <Navbar />
    <section className="pt-28 pb-20" style={{ background: "var(--hero-gradient)" }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6">
            <Megaphone size={14} /> Social Media Management
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground leading-[1.1] mb-6">
            Grow Your Brand With <span className="text-primary">Strategic Social Media</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">Content creation, reels, engagement, and growth strategy — all managed by our expert team.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/services/social-media-management/pricing">View Plans <ArrowRight size={18} className="ml-1" /></Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/#contact">Get a Quote</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-20 bg-card/50">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-foreground">What You Get</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <b.icon size={22} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-foreground">Our SMM Process</h2>
        </div>
        <div className="max-w-2xl mx-auto space-y-4">
          {process.map((p, i) => (
            <motion.div key={p.step} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 bg-card border border-border rounded-lg p-4">
              <span className="text-primary font-bold text-lg">{p.step}</span>
              <div>
                <h3 className="font-semibold text-foreground">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-primary/5 border-y border-primary/10">
      <div className="container text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Dominate Social Media?</h2>
        <p className="text-muted-foreground mb-8">Choose a plan that fits your business and start growing today.</p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/services/social-media-management/pricing">View Plans <ArrowRight size={18} className="ml-1" /></Link>
        </Button>
      </div>
    </section>
    <Footer />
  </>
);

export default SocialMediaManagement;
