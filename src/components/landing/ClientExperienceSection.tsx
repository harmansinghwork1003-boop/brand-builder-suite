import { motion } from "framer-motion";
import { ShieldCheck, MessageCircle, Clock, Sparkles, Phone, Eye } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };

const experiences = [
  { icon: ShieldCheck, title: "Premium Quality", desc: "Every deliverable goes through rigorous quality checks before reaching you." },
  { icon: MessageCircle, title: "Clear Communication", desc: "Regular updates, transparent timelines, and no surprises ever." },
  { icon: Clock, title: "On-Time Delivery", desc: "We respect your time. Deadlines aren't suggestions. they're commitments." },
  { icon: Sparkles, title: "Free Consultation", desc: "Every project starts with a free strategy session to align on goals." },
  { icon: Eye, title: "Transparent Workflow", desc: "Full visibility into progress with shared boards and milestone tracking." },
  { icon: Phone, title: "Dedicated Support", desc: "Direct access to your project lead. no ticket queues or chatbots." },
];

const ClientExperienceSection = () => (
  <section className="section-padding bg-card/50">
    <div className="container">
      <div className="max-w-5xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} transition={{ duration: 0.4, ease: "easeOut" }} className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">The Experience</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground">
            What Clients <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
            Working with us is designed to be seamless, transparent, and results-driven.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {experiences.map((e, i) => (
            <motion.div key={e.title} initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.4, ease: "easeOut" }}
              className="card-premium p-6 group flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                <e.icon size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">{e.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ClientExperienceSection;
