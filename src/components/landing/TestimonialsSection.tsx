import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Rajesh Sharma", role: "CEO, TechVista", text: "Makes and Made delivered our e-commerce platform on time and above expectations. Their communication was flawless.", rating: 5 },
  { name: "Priya Patel", role: "Founder, GreenLeaf", text: "The social media management team transformed our online presence. We saw a 200% increase in engagement within 3 months.", rating: 5 },
  { name: "Amit Verma", role: "CTO, DataFlow", text: "Professional, responsive, and incredibly skilled. They built our custom software exactly as we envisioned it.", rating: 5 },
  { name: "Sneha Gupta", role: "Marketing Head, BrightPath", text: "Their Google Ads campaigns delivered an incredible ROI. Highly recommend their marketing services.", rating: 5 },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-24 bg-secondary/30">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Testimonials</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">What Our Clients Say</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border/60 rounded-xl p-6 shadow-card"
          >
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} size={14} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
            <div>
              <p className="font-semibold text-sm text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
