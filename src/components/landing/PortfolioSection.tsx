import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type PortfolioCat = "all" | "web" | "app" | "social";

const projects = [
  { cat: "web" as const, title: "E-commerce Platform", desc: "Full-stack online store with payment integration", color: "from-primary/20 to-accent" },
  { cat: "web" as const, title: "Corporate Website", desc: "Premium brand website for a consulting firm", color: "from-accent to-secondary" },
  { cat: "app" as const, title: "Fitness Tracker App", desc: "Cross-platform mobile app with real-time sync", color: "from-primary/10 to-primary/20" },
  { cat: "app" as const, title: "Food Delivery App", desc: "Complete ordering system with driver tracking", color: "from-secondary to-accent" },
  { cat: "social" as const, title: "Brand Social Campaign", desc: "Social media strategy with 300% engagement increase", color: "from-accent to-primary/10" },
  { cat: "social" as const, title: "Product Launch Campaign", desc: "Multi-platform campaign driving 10K leads in 30 days", color: "from-primary/20 to-secondary" },
];

const filters: { label: string; value: PortfolioCat }[] = [
  { label: "All", value: "all" },
  { label: "Websites", value: "web" },
  { label: "Apps", value: "app" },
  { label: "Social Media", value: "social" },
];

const PortfolioSection = () => {
  const [active, setActive] = useState<PortfolioCat>("all");
  const filtered = active === "all" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Our Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Featured Projects</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${active === f.value ? "bg-primary text-primary-foreground shadow-md" : "bg-card text-muted-foreground hover:text-foreground border border-border"}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-card border border-border/60 rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className={`h-48 bg-gradient-to-br ${p.color} flex items-center justify-center`}>
                <ExternalLink size={32} className="text-primary/40 group-hover:text-primary/70 transition-colors" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-foreground mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
