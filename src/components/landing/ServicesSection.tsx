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

const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };

const ServicesSection = () => (
  <section id="services" className="section-padding bg-card/30">
    <div className="container">
      <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} transition={{ duration: 0.4, ease: "easeOut" }} className="text-center mb-16">
        <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">What We Do</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground">
          Services That <span className="gradient-text">Drive Growth</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">From development to marketing — everything your business needs to succeed online.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {coreServices.map((s, i) => (
          <motion.div key={s.title} initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}>
            <Link to={s.href} className="card-premium block p-7 group h-full">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 transition-shadow duration-[350ms]">
                <s.icon size={24} />
              </div>
              <h3 className="font-bold text-foreground mb-2 text-lg">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
              <span className="inline-flex items-center text-sm text-primary font-semibold gap-1 transition-all duration-300">
                Learn More <ArrowRight size={14} />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} transition={{ duration: 0.4, ease: "easeOut" }} className="text-center mb-10">
        <h3 className="text-3xl font-extrabold text-foreground">Additional <span className="gradient-text">Solutions</span></h3>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {additionalServices.map((s, i) => (
          <motion.div key={s.title} initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.4, ease: "easeOut" }}
            className="card-premium flex items-start gap-4 p-5 group">
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-shadow duration-[350ms]">
              <s.icon size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">{s.title}</h4>
              <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
