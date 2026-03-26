import { motion } from "framer-motion";
import { Lightbulb, Layout, Code2, Rocket } from "lucide-react";

const steps = [
  { icon: Lightbulb, title: "Understanding & Strategy", desc: "We research your market, audience, and goals to build a tailored strategy." },
  { icon: Layout, title: "Planning & Design", desc: "Wireframes, mockups, and a clear project plan before any code is written." },
  { icon: Code2, title: "Development & Execution", desc: "Clean, scalable code built with modern tech and best practices." },
  { icon: Rocket, title: "Delivery & Optimization", desc: "Launch, test, optimize — and ongoing support to keep things running." },
];

const ProcessSection = () => (
  <section id="process" className="py-20 bg-card/50">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">Our Process</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">How We Work</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="relative text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4 glow-primary-sm">
              <s.icon size={28} />
            </div>
            <span className="text-xs text-primary font-bold">Step {i + 1}</span>
            <h3 className="font-semibold text-foreground mt-1 mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
