import { motion } from "framer-motion";

const projects = [
  { title: "E-Commerce Platform", category: "Website", gradient: "from-primary/20 to-primary/5" },
  { title: "Restaurant App UI", category: "App", gradient: "from-accent to-primary/10" },
  { title: "Brand Social Campaign", category: "Social Media", gradient: "from-primary/10 to-accent" },
  { title: "SaaS Dashboard", category: "Website", gradient: "from-primary/15 to-secondary" },
];

const PortfolioSection = () => (
  <section id="portfolio" className="py-20 bg-background">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">Our Work</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Portfolio Preview</h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">A glimpse of the results we've delivered for our clients.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((p, i) => (
          <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-elevated transition-all duration-300">
            <div className={`h-48 bg-gradient-to-br ${p.gradient} flex items-center justify-center`}>
              <span className="text-foreground/30 text-sm font-medium">Preview</span>
            </div>
            <div className="p-5">
              <span className="text-xs text-primary font-medium">{p.category}</span>
              <h3 className="font-semibold text-foreground mt-1">{p.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
