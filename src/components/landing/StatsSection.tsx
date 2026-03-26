import { motion } from "framer-motion";

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "80+", label: "Businesses Served" },
  { value: "99%", label: "On-Time Commitment" },
  { value: "4.9/5", label: "Client Satisfaction Score" },
];

const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };

const StatsSection = () => (
  <section className="py-20 bg-primary/5 border-y border-primary/10 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
    <div className="container relative">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((s, i) => (
          <motion.div key={s.label} initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}
            className="text-center">
            <p className="text-4xl sm:text-5xl font-extrabold gradient-text mb-2">{s.value}</p>
            <p className="text-sm text-muted-foreground font-medium">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
