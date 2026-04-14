import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Rahul Sharma", role: "Founder, TechStart", text: "Makes & Made delivered our website ahead of schedule with incredible quality. Their communication was outstanding throughout.", rating: 5 },
  { name: "Priya Patel", role: "CEO, GreenLeaf", text: "The social media management transformed our online presence. We saw 3x engagement within the first month.", rating: 5 },
  { name: "Amit Verma", role: "Director, BuildCorp", text: "Professional, reliable, and genuinely invested in our success. Best agency we've worked with.", rating: 5 },
];

const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };

const TestimonialsSection = () => (
  <section id="testimonials" className="section-padding bg-background">
    <div className="container">
      <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} transition={{ duration: 0.4, ease: "easeOut" }} className="text-center mb-16">
        <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">Testimonials</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground">
          What Our <span className="gradient-text">Clients Say</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div key={t.name} initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}
            className="card-premium p-7 group relative">
            <Quote size={32} className="text-primary/10 absolute top-5 right-5" />
            <div className="flex gap-0.5 mb-5">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} size={16} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">{t.text}</p>
            <div>
              <p className="font-bold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
