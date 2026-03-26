import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, ShoppingCart, Code2, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const packages = [
  {
    name: "Business Presence Website",
    price: "₹7,000+",
    desc: "Perfect for startups and small businesses that need a professional online presence.",
    features: ["5-7 Pages", "Mobile Responsive", "Contact Form", "SEO Basics", "1 Month Support"],
    icon: Globe,
  },
  {
    name: "Business Growth Website",
    price: "₹17,000+",
    desc: "For businesses ready to scale with advanced features and integrations.",
    features: ["10-15 Pages", "Custom Design", "CMS Integration", "Advanced SEO", "Analytics Setup", "3 Months Support"],
    icon: Code2,
    popular: true,
  },
  {
    name: "E-Commerce System",
    price: "₹25,000+",
    desc: "Complete e-commerce solution with payment gateway and inventory management.",
    features: ["Unlimited Products", "Payment Gateway", "Inventory Management", "Order Tracking", "Admin Dashboard", "6 Months Support"],
    icon: ShoppingCart,
  },
];

const WebsiteDevelopment = () => (
  <>
    <Navbar />
    {/* Hero */}
    <section className="pt-28 pb-20 bg-background" style={{ background: "var(--hero-gradient)" }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6">
            <Globe size={14} /> Website Development
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground leading-[1.1] mb-6">
            Websites That <span className="text-primary">Convert Visitors</span> Into Customers
          </h1>
          <p className="text-lg text-muted-foreground mb-8">Custom-built, responsive websites designed for performance, speed, and results. No templates — every project is unique.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/services/website-development/pricing">View Pricing <ArrowRight size={18} className="ml-1" /></Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/#contact">Get a Quote</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Packages Preview */}
    <section className="py-20 bg-card/50">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">Our Packages</p>
          <h2 className="text-3xl font-bold text-foreground">Choose Your Plan</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div key={pkg.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`bg-card border rounded-xl p-6 relative ${pkg.popular ? "border-primary glow-primary-sm" : "border-border"}`}>
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
              )}
              <pkg.icon size={24} className="text-primary mb-3" />
              <h3 className="font-bold text-foreground text-lg">{pkg.name}</h3>
              <p className="text-2xl font-extrabold text-primary mt-2">{pkg.price}</p>
              <p className="text-sm text-muted-foreground mt-2 mb-4">{pkg.desc}</p>
              <ul className="space-y-2 mb-6">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-primary shrink-0" /> {f}
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

    {/* Portfolio */}
    <section className="py-20 bg-background">
      <div className="container text-center">
        <h2 className="text-3xl font-bold text-foreground mb-10">Our Website Projects</h2>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {["E-Commerce Platform", "Corporate Website", "SaaS Dashboard"].map((title, i) => (
            <div key={title} className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-primary/15 to-accent flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Preview</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-primary/5 border-y border-primary/10">
      <div className="container text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Build Your Website?</h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Let's create a website that represents your brand and drives results.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="hero" size="lg" asChild>
            <Link to="/services/website-development/pricing">View Pricing</Link>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <Link to="/#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default WebsiteDevelopment;
