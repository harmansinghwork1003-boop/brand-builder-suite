import { motion } from "framer-motion";
import { Lightbulb, Layout, Code2, Rocket } from "lucide-react";

const steps = [
  { icon: Lightbulb, title: "Understanding & Strategy", desc: "We research your market, audience, and goals to build a tailored strategy." },
  { icon: Layout, title: "Planning & Design", desc: "Wireframes, mockups, and a clear project plan before any code is written." },
  { icon: Code2, title: "Development & Execution", desc: "Clean, scalable code built with modern tech and best practices." },
  { icon: Rocket, title: "Delivery & Optimization", desc: "Launch, test, optimize — and ongoing support to keep things running." },
];

const ProcessSection = () => (
  <section id="process" className="section-padding bg-card/30">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">Our Process</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground">
          How We <span className="gradient-text">Work</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="relative text-center group">
            <div className="w-18 h-18 w-[72px] h-[72px] rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-5 group-hover:glow-primary transition-shadow duration-300">
              <s.icon size={30} />
            </div>
            <span className="text-xs text-primary font-bold uppercase tracking-wider">Step {i + 1}</span>
            <h3 className="font-bold text-foreground mt-2 mb-3 text-lg">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
