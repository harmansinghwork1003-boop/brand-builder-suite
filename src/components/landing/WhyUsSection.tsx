import { motion } from "framer-motion";
import { Shield, MessageSquare, Clock, Eye, HeartHandshake } from "lucide-react";

const reasons = [
  { icon: Shield, title: "Quality-First Execution", desc: "Every project is built with precision and attention to detail — no shortcuts." },
  { icon: Eye, title: "Research-Based Strategy", desc: "We analyze your market, audience, and competitors before writing a single line of code." },
  { icon: Clock, title: "On-Time Delivery", desc: "Deadlines aren't optional. We deliver every project on schedule, every time." },
  { icon: MessageSquare, title: "Professional Communication", desc: "Clear updates, transparent workflow, and responsive support throughout." },
  { icon: HeartHandshake, title: "Results-Focused Approach", desc: "We don't just build — we ensure our solutions drive real business growth." },
];

const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };

const WhyUsSection = () => (
  <section id="why-us" className="section-padding bg-background">
    <div className="container">
      <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} transition={{ duration: 0.4, ease: "easeOut" }} className="text-center mb-16">
        <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">Why Choose Us</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground">
          Why <span className="gradient-text">Makes & Made</span> Developers?
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">Focused on quality, not quantity. Custom solutions, not templates.</p>
        <p className="text-primary/80 mt-3 text-sm font-medium tracking-wide">We only work with businesses serious about growth.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}
            className="card-premium p-7 group"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 transition-shadow duration-[350ms]">
              <r.icon size={24} />
            </div>
            <h3 className="font-bold text-foreground mb-2 text-lg">{r.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
