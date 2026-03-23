import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, ShoppingCart, Smartphone, Cpu, LayoutGrid, Search, Target, Share2, ShieldCheck, Headphones, Megaphone, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

type Category = "all" | "development" | "marketing" | "it";

const services = [
  { cat: "development" as const, icon: <Globe size={20} />, title: "Website Development", desc: "Custom, responsive websites built for performance and conversion." },
  { cat: "development" as const, icon: <ShoppingCart size={20} />, title: "E-commerce Development", desc: "Scalable online stores with seamless checkout experiences." },
  { cat: "development" as const, icon: <Smartphone size={20} />, title: "App Development", desc: "Native and cross-platform mobile apps for Android & iOS." },
  { cat: "development" as const, icon: <Cpu size={20} />, title: "Software Development", desc: "Custom software solutions tailored to your business needs." },
  { cat: "development" as const, icon: <LayoutGrid size={20} />, title: "Web Portals", desc: "Secure portals for clients, employees, or partners." },
  { cat: "marketing" as const, icon: <Search size={20} />, title: "SEO", desc: "Data-driven SEO strategies to boost organic visibility." },
  { cat: "marketing" as const, icon: <Target size={20} />, title: "Google Ads", desc: "High-ROI paid search campaigns that drive qualified traffic." },
  { cat: "marketing" as const, icon: <BarChart3 size={20} />, title: "Meta Ads", desc: "Facebook & Instagram advertising for reach and conversions." },
  { cat: "marketing" as const, icon: <Share2 size={20} />, title: "Social Media Management", desc: "End-to-end social media strategy, content, and growth." },
  { cat: "it" as const, icon: <ShieldCheck size={20} />, title: "Cybersecurity", desc: "Protect your business with enterprise-grade security solutions." },
  { cat: "it" as const, icon: <Headphones size={20} />, title: "Technical Support", desc: "Reliable IT support to keep your operations running smoothly." },
  { cat: "it" as const, icon: <Megaphone size={20} />, title: "Business Promotion", desc: "Strategic promotion to increase brand awareness and growth." },
];

const filters: { label: string; value: Category }[] = [
  { label: "All Services", value: "all" },
  { label: "Development", value: "development" },
  { label: "Marketing", value: "marketing" },
  { label: "IT Solutions", value: "it" },
];

const ServicesSection = () => {
  const [active, setActive] = useState<Category>("all");
  const filtered = active === "all" ? services : services.filter((s) => s.cat === active);

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">What We Do</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Services</h2>
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-card border border-border/60 rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-primary mb-4">{s.icon}</div>
              <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
              <Button variant="link" className="p-0 h-auto text-sm" asChild>
                <a href="#contact">Learn More →</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
