import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Globe, Code2, ShoppingCart } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const packages = [
  {
    name: "Business Presence Website",
    price: "₹7,000+",
    desc: "Professional online presence for small businesses and startups.",
    icon: Globe,
    features: [
      "5-7 Responsive Pages",
      "Modern Design",
      "Contact Form Integration",
      "SEO Basics Setup",
      "Mobile Optimized",
      "Google Analytics",
      "Social Media Links",
      "1 Month Free Support",
      "SSL Certificate",
    ],
  },
  {
    name: "Business Growth Website",
    price: "₹17,000+",
    desc: "Advanced website with CMS for scaling businesses.",
    icon: Code2,
    popular: true,
    features: [
      "10-15 Custom Pages",
      "Premium UI/UX Design",
      "CMS Integration",
      "Advanced SEO Setup",
      "Blog System",
      "Lead Capture Forms",
      "Analytics Dashboard",
      "Speed Optimization",
      "3 Months Free Support",
      "Custom Animations",
    ],
  },
  {
    name: "E-Commerce System",
    price: "₹25,000+",
    desc: "Complete online store with payment and inventory management.",
    icon: ShoppingCart,
    features: [
      "Unlimited Products",
      "Payment Gateway Setup",
      "Inventory Management",
      "Order Tracking System",
      "Customer Accounts",
      "Admin Dashboard",
      "Shipping Integration",
      "Discount & Coupon System",
      "Email Notifications",
      "6 Months Free Support",
    ],
  },
];

const WebsitePricing = () => (
  <>
    <Navbar />
    <section className="pt-28 pb-10" style={{ background: "var(--hero-gradient)" }}>
      <div className="container text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6">
            <Globe size={14} /> Website Pricing
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">Website Development Packages</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Transparent pricing. No hidden fees. Every website is custom-built for your business.</p>
        </motion.div>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div key={pkg.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`bg-card border rounded-xl p-6 flex flex-col relative ${pkg.popular ? "border-primary glow-primary-sm" : "border-border"}`}>
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
              )}
              <pkg.icon size={28} className="text-primary mb-3" />
              <h3 className="font-bold text-foreground text-xl">{pkg.name}</h3>
              <p className="text-3xl font-extrabold text-primary mt-2">{pkg.price}</p>
              <p className="text-sm text-muted-foreground mt-2 mb-6">{pkg.desc}</p>
              <ul className="space-y-2 flex-1 mb-6">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant={pkg.popular ? "default" : "outline"} asChild>
                <Link to="/#contact">Get Started</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-primary/5 border-y border-primary/10">
      <div className="container text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">Need Something Custom?</h2>
        <p className="text-muted-foreground mb-6">Every business is unique. Let's discuss your specific requirements.</p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/#contact">Contact Us <ArrowRight size={18} className="ml-1" /></Link>
        </Button>
      </div>
    </section>
    <Footer />
  </>
);

export default WebsitePricing;
