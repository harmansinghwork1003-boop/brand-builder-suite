import { motion } from "framer-motion";
import { Shield, MessageSquare, Clock, Eye, HeartHandshake } from "lucide-react";

const reasons = [
  { icon: Shield, title: "Quality-First Execution", desc: "Every project is built with precision and attention to detail — no shortcuts." },
  { icon: Eye, title: "Research-Based Strategy", desc: "We analyze your market, audience, and competitors before writing a single line of code." },
  { icon: Clock, title: "On-Time Delivery", desc: "Deadlines aren't optional. We deliver every project on schedule, every time." },
  { icon: MessageSquare, title: "Professional Communication", desc: "Clear updates, transparent workflow, and responsive support throughout." },
  { icon: HeartHandshake, title: "Results-Focused Approach", desc: "We don't just build — we ensure our solutions drive real business growth." },
];

const WhyUsSection = () => (
  <section id="why-us" className="py-20 bg-background">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">Why Choose Us</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Why Makes & Made Developers?</h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Focused on quality, not quantity. Custom solutions, not templates.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-6 hover:shadow-card-hover hover:border-primary/30 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:glow-primary-sm transition-shadow">
              <r.icon size={22} />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{r.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
