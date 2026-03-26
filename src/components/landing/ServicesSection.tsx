import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, Megaphone, Search, Smartphone, ArrowRight, Video, Palette, ShieldCheck, Headphones } from "lucide-react";

const coreServices = [
  { icon: Globe, title: "Website Development", desc: "Custom websites that convert visitors into customers. From business sites to e-commerce.", href: "/services/website-development" },
  { icon: Megaphone, title: "Social Media Management", desc: "Content creation, reels, engagement strategy, and growth — all managed for you.", href: "/services/social-media-management" },
  { icon: Search, title: "SEO", desc: "Rank higher on Google, drive organic traffic, and dominate your local market.", href: "/services/seo" },
  { icon: Smartphone, title: "App Development", desc: "Android & iOS apps built for performance, scalability, and user experience.", href: "/services/app-development" },
];

const additionalServices = [
  { icon: Megaphone, title: "Google Ads & Meta Ads", desc: "Paid campaigns that deliver measurable ROI." },
  { icon: Palette, title: "Branding & Design", desc: "Logos, brand identity, and visual assets that stand out." },
  { icon: Video, title: "Video Editing", desc: "Professional video content for social media and marketing." },
  { icon: ShieldCheck, title: "Cybersecurity", desc: "Protect your digital assets with enterprise-grade security." },
  { icon: Headphones, title: "Technical Support", desc: "Ongoing maintenance, updates, and support for your systems." },
  { icon: Globe, title: "Web Portals", desc: "Custom portals for internal operations and client management." },
];

const ServicesSection = () => (
  <section id="services" className="py-20 bg-card/50">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">What We Do</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Services That Drive Growth</h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">From development to marketing — everything your business needs to succeed online.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {coreServices.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <Link to={s.href} className="block bg-card border border-border rounded-xl p-6 hover:shadow-elevated hover:border-primary/30 transition-all duration-300 group h-full">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <s.icon size={22} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
              <span className="inline-flex items-center text-sm text-primary font-medium group-hover:gap-2 transition-all">
                Learn More <ArrowRight size={14} className="ml-1" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground">Additional Solutions</h3>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {additionalServices.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            className="flex items-start gap-4 bg-card border border-border rounded-lg p-4 hover:border-primary/20 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <s.icon size={18} />
            </div>
            <div>
              <h4 className="font-medium text-foreground text-sm">{s.title}</h4>
              <p className="text-xs text-muted-foreground mt-0.5">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
