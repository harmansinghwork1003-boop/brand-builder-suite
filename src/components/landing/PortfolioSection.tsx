import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import socialMediaMockup from "@/assets/portfolio-social-media.jpg";
import ecommerceMockup from "@/assets/portfolio-ecommerce.jpg";
import restaurantMockup from "@/assets/portfolio-restaurant.jpg";
import saasMockup from "@/assets/portfolio-saas.jpg";

const projects = [
  { title: "Social Media Brand Campaign", category: "Social Media", gradient: "from-primary/25 to-accent", href: "/portfolio/social-media-campaign", featured: true, image: socialMediaMockup },
  { title: "E-Commerce Platform", category: "Website", gradient: "from-primary/20 to-primary/5", href: "/portfolio/e-commerce-platform", image: ecommerceMockup },
  { title: "Restaurant App UI", category: "App", gradient: "from-accent to-primary/10", href: "/portfolio/restaurant-app", image: restaurantMockup },
  { title: "SaaS Dashboard", category: "Website", gradient: "from-primary/15 to-secondary", href: "/portfolio/saas-dashboard", image: saasMockup },
];

const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };

const PortfolioSection = () => (
  <section id="portfolio" className="section-padding bg-background">
    <div className="container">
      <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} transition={{ duration: 0.4, ease: "easeOut" }} className="text-center mb-16">
        <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">Our Work</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground">
          Work Delivered <span className="gradient-text">for Brands</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">Real projects, real results — here's what we've built for businesses serious about growth.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((p, i) => {
          const card = (
            <motion.div key={p.title} initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}
              className={`card-premium group overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-8px_hsl(var(--primary)/0.25)] ${p.featured ? "border-primary/30 shadow-[0_0_20px_-6px_hsl(var(--primary)/0.2)]" : ""}`}>
              <div className={`${p.featured ? "h-60" : "h-52"} relative overflow-hidden`}>
                <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>
              <div className="p-6">
                <span className="text-xs text-primary font-semibold uppercase tracking-wider">{p.category}</span>
                <h3 className="font-bold text-foreground mt-1 text-lg">{p.title}</h3>
              </div>
            </motion.div>
          );

          return p.href ? (
            <Link key={p.title} to={p.href}>{card}</Link>
          ) : (
            card
          );
        })}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
