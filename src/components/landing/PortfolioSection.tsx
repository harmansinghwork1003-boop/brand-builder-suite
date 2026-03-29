import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  { title: "Social Media Brand Campaign", category: "Social Media", gradient: "from-primary/25 to-accent", href: "/portfolio/social-media-campaign", featured: true },
  { title: "E-Commerce Platform", category: "Website", gradient: "from-primary/20 to-primary/5", href: "/portfolio/e-commerce-platform" },
  { title: "Restaurant App UI", category: "App", gradient: "from-accent to-primary/10", href: "/portfolio/restaurant-app" },
  { title: "SaaS Dashboard", category: "Website", gradient: "from-primary/15 to-secondary", href: "/portfolio/saas-dashboard" },
];

const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };

const PortfolioSection = () => (
  <section id="portfolio" className="section-padding bg-background">
    <div className="container">
      <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} transition={{ duration: 0.4, ease: "easeOut" }} className="text-center mb-16">
        <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">Our Work</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground">
          Portfolio <span className="gradient-text">Preview</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">A glimpse of the results we've delivered for our clients.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((p, i) => {
          const card = (
            <motion.div key={p.title} initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}
              className={`card-premium group overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-8px_hsl(var(--primary)/0.25)] ${p.featured ? "border-primary/30 shadow-[0_0_20px_-6px_hsl(var(--primary)/0.2)]" : ""}`}>
              <div className={`${p.featured ? "h-60" : "h-52"} bg-gradient-to-br ${p.gradient} flex items-center justify-center relative`}>
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300" />
                <span className="text-foreground/30 text-sm font-medium relative z-10">Preview</span>
              </div>
              <div className="p-6">
                <span className="text-xs text-primary font-semibold uppercase tracking-wider">{p.category}</span>
                <h3 className="font-bold text-foreground mt-1 text-lg">{p.title}</h3>
              </div>
            </motion.div>
          );

          return p.href ? (
            <Link key={p.title} to={p.href}>{card}</Link>
          ) : (
            card
          );
        })}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
