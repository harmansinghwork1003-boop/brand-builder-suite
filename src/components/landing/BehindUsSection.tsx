import { motion } from "framer-motion";
import { Heart, Users, Lightbulb } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };

const values = [
  { icon: Heart, title: "Passion-Driven", desc: "Every project is treated as our own — we care deeply about your success." },
  { icon: Users, title: "Close Collaboration", desc: "We work alongside you, not just for you. Your vision drives every decision." },
  { icon: Lightbulb, title: "Solution-First Thinking", desc: "We don't just build — we solve real business problems with digital systems." },
];

const BehindUsSection = () => (
  <section className="section-padding bg-background">
    <div className="container">
      <div className="max-w-5xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} transition={{ duration: 0.4, ease: "easeOut" }} className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">Who We Are</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground">
            Behind <span className="gradient-text">Makes & Made</span>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-2xl mx-auto text-lg leading-relaxed">
            We're a small, focused team that believes great digital work comes from genuine partnerships — not assembly lines. Every client gets our full attention, creativity, and commitment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div key={v.title} initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}
              className="card-premium p-7 text-center group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <v.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
          className="mt-10 text-center">
          <p className="text-sm text-primary/80 font-medium italic border border-primary/15 rounded-full inline-block px-6 py-2.5 bg-primary/5">
            "We take limited clients each month to maintain the quality we're known for."
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default BehindUsSection;
