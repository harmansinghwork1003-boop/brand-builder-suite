import { motion } from "framer-motion";

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "80+", label: "Clients Served" },
  { value: "99%", label: "On-Time Delivery" },
  { value: "4.9/5", label: "Client Satisfaction" },
];

const StatsSection = () => (
  <section className="py-16 bg-primary/5 border-y border-primary/10">
    <div className="container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="text-center">
            <p className="text-3xl sm:text-4xl font-extrabold text-primary">{s.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
