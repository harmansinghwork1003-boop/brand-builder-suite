import { motion } from "framer-motion";

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "80+", label: "Clients Served" },
  { value: "99%", label: "On-Time Delivery" },
  { value: "24/7", label: "Support Available" },
];

const StatsSection = () => (
  <section className="py-16 bg-foreground">
    <div className="container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <p className="text-3xl sm:text-4xl font-extrabold text-primary-foreground">{s.value}</p>
            <p className="text-sm text-primary-foreground/60 mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
