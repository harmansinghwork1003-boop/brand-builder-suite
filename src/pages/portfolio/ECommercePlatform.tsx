import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart, CreditCard, BarChart3, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import mockup from "@/assets/portfolio-ecommerce.jpg";

const highlights = [
  { icon: ShoppingCart, title: "Product Catalog", desc: "Dynamic product grid with filters, search, and category navigation." },
  { icon: CreditCard, title: "Secure Checkout", desc: "Streamlined multi-step checkout with payment gateway integration." },
  { icon: BarChart3, title: "Analytics Dashboard", desc: "Real-time sales tracking, inventory management, and reporting." },
  { icon: Smartphone, title: "Mobile Optimized", desc: "Fully responsive design for seamless shopping on any device." },
];

const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };

const ECommercePlatform = () => (
  <>
    <Navbar />
    <section className="pt-28 pb-16" style={{ background: "var(--hero-gradient)" }}>
      <div className="container">
        <Button variant="ghost" size="sm" asChild className="mb-6 text-muted-foreground hover:text-foreground">
          <Link to="/#portfolio"><ArrowLeft size={16} className="mr-1" /> Back to Portfolio</Link>
        </Button>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="max-w-2xl">
          <span className="text-xs text-primary font-semibold uppercase tracking-wider">Website</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2 mb-4">E-Commerce Platform</h1>
          <p className="text-muted-foreground text-lg">A modern, high-converting e-commerce platform built for performance, scalability, and seamless user experience.</p>
        </motion.div>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container">
        {/* Mockup */}
        <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-16 rounded-2xl overflow-hidden border border-border shadow-[0_8px_40px_-12px_hsl(var(--primary)/0.2)]">
          <img src={mockup} alt="E-Commerce Platform mockup" loading="lazy" width={1280} height={720} className="w-full h-auto" />
        </motion.div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {highlights.map((h, i) => (
            <motion.div key={h.title} initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }}
              className="card-premium p-6 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <h.icon size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">{h.title}</h3>
                <p className="text-muted-foreground text-sm">{h.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default ECommercePlatform;
