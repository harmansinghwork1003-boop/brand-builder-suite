import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, TrendingUp, BarChart3, Target, FileText, ArrowRight } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const benefits = [
  { icon: TrendingUp, title: "Higher Rankings", desc: "Get your website to the top of Google search results." },
  { icon: Target, title: "Targeted Traffic", desc: "Attract visitors who are actively searching for your services." },
  { icon: BarChart3, title: "Measurable Growth", desc: "Track rankings, traffic, and conversions with detailed reports." },
  { icon: FileText, title: "Content Strategy", desc: "SEO-optimized content that drives organic visibility." },
];

const strategy = [
  { title: "Technical SEO Audit", desc: "Complete analysis of your website's technical health, speed, and structure." },
  { title: "Keyword Research", desc: "Identify high-value keywords your target audience is searching for." },
  { title: "On-Page Optimization", desc: "Optimize meta tags, content, headings, and internal linking." },
  { title: "Off-Page SEO", desc: "Build high-quality backlinks and improve domain authority." },
  { title: "Local SEO", desc: "Dominate local search results with Google Business Profile optimization." },
  { title: "Monthly Reporting", desc: "Detailed reports on rankings, traffic, and ROI." },
];

const SEOPage = () => (
  <>
    <Navbar />
    <section className="pt-28 pb-20" style={{ background: "var(--hero-gradient)" }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6">
            <Search size={14} /> SEO Services
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground leading-[1.1] mb-6">
            Rank Higher, <span className="text-primary">Grow Faster</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-4">Data-driven SEO strategies that drive organic traffic and deliver measurable results.</p>
          <p className="text-primary font-semibold mb-8">Plans starting from ₹5,000/month</p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/#contact">Get Started <ArrowRight size={18} className="ml-1" /></Link>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-20 bg-card/50">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-foreground">Why Invest in SEO?</h2>
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

    {/* Strategy */}
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-foreground">Our SEO Strategy</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {strategy.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors">
              <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-primary/5 border-y border-primary/10">
      <div className="container text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Rank Higher?</h2>
        <p className="text-muted-foreground mb-8">Let's create an SEO strategy that drives real results for your business.</p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/#contact">Get Started <ArrowRight size={18} className="ml-1" /></Link>
        </Button>
      </div>
    </section>
    <Footer />
  </>
);

export default SEOPage;
