import { motion } from "framer-motion";
import { Lightbulb, PenTool, Rocket, TrendingUp } from "lucide-react";

const steps = [
  { icon: <Lightbulb size={24} />, num: "01", title: "Understanding & Strategy", desc: "We deep-dive into your goals, audience, and market to craft the perfect strategy." },
  { icon: <PenTool size={24} />, num: "02", title: "Planning & Design", desc: "Detailed wireframes, timelines, and design mockups for complete clarity." },
  { icon: <Rocket size={24} />, num: "03", title: "Development & Execution", desc: "Clean code, agile sprints, and regular updates until everything is perfect." },
  { icon: <TrendingUp size={24} />, num: "04", title: "Delivery & Optimization", desc: "Launch, monitor, and optimize for continuous improvement and growth." },
];

const ProcessSection = () => (
  <section id="process" className="py-24 bg-background">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">How We Work</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Process</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-primary mx-auto mb-4">{s.icon}</div>
            <span className="text-xs font-bold text-primary/60 uppercase tracking-widest">Step {s.num}</span>
            <h3 className="font-semibold text-foreground mt-1 mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-7 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-border" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
