import { motion } from "framer-motion";
import { Award, MessageCircle, Clock, Eye, HeartHandshake } from "lucide-react";

const points = [
  { icon: <Award size={22} />, title: "Quality-First Execution", desc: "Every project is built to the highest standards with meticulous attention to detail." },
  { icon: <MessageCircle size={22} />, title: "Professional Communication", desc: "Clear updates, transparent timelines, and responsive support throughout." },
  { icon: <Clock size={22} />, title: "On-Time Delivery", desc: "We commit to deadlines and deliver — no excuses, no delays." },
  { icon: <Eye size={22} />, title: "Transparent Workflow", desc: "Full visibility into every phase of your project from start to finish." },
  { icon: <HeartHandshake size={22} />, title: "Long-Term Support", desc: "We don't disappear after delivery. Ongoing support is part of our DNA." },
];

const WhyUsSection = () => (
  <section id="why-us" className="py-24 bg-background">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Why Choose Us</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">Why Choose Makes and Made Developers</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-card border border-border/60 rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300"
          >
            <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              {p.icon}
            </div>
            <h3 className="font-semibold text-foreground mb-1.5">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
