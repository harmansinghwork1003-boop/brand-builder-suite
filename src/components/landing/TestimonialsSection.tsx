import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Rahul Sharma", role: "Founder, TechStart", text: "Makes & Made delivered our website ahead of schedule with incredible quality. Their communication was outstanding throughout.", rating: 5 },
  { name: "Priya Patel", role: "CEO, GreenLeaf", text: "The social media management transformed our online presence. We saw 3x engagement within the first month.", rating: 5 },
  { name: "Amit Verma", role: "Director, BuildCorp", text: "Professional, reliable, and genuinely invested in our success. Best agency we've worked with.", rating: 5 },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 bg-background">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">Testimonials</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">What Our Clients Say</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-6 hover:shadow-card-hover transition-all duration-300">
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} size={16} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
            <div>
              <p className="font-semibold text-foreground text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
