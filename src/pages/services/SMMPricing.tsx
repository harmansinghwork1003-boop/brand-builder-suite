import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Megaphone } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const packages = [
  {
    name: "Starter",
    price: "₹4,999",
    period: "/month",
    features: ["8 Posts/Month", "Basic Graphics", "1 Platform", "Monthly Report"],
  },
  {
    name: "Basic",
    price: "₹7,999",
    period: "/month",
    features: ["12 Posts/Month", "Custom Graphics", "2 Platforms", "4 Reels/Month", "Monthly Report"],
  },
  {
    name: "Basic Plus",
    price: "₹11,999",
    period: "/month",
    badge: "Popular",
    features: ["16 Posts/Month", "Custom Graphics", "2 Platforms", "8 Reels/Month", "Story Management", "Engagement Strategy", "Bi-weekly Report"],
  },
  {
    name: "Standard",
    price: "₹15,999",
    period: "/month",
    features: ["20 Posts/Month", "Premium Graphics", "3 Platforms", "12 Reels/Month", "Story Management", "Hashtag Strategy", "Community Management", "Weekly Report"],
  },
  {
    name: "Premium Elite",
    price: "₹21,999",
    period: "/month",
    badge: "Most Popular",
    features: ["25 Posts/Month", "Premium Graphics & Video", "3 Platforms", "16 Reels/Month", "Full Story Management", "Influencer Collaboration", "Ad Strategy", "Detailed Analytics", "Priority Support"],
  },
  {
    name: "Business",
    price: "₹29,999",
    period: "/month",
    badge: "Premium",
    features: ["30 Posts/Month", "Premium Content Suite", "4 Platforms", "20 Reels/Month", "Full Management", "Paid Ad Management", "Brand Strategy", "Competitor Analysis", "Dedicated Manager", "24/7 Support"],
  },
  {
    name: "Custom Enterprise",
    price: "Contact Us",
    period: "",
    features: ["Unlimited Posts", "All Platforms", "Custom Strategy", "Dedicated Team", "White-Label Options", "Custom Reporting"],
  },
];

const SMMPricing = () => (
  <>
    <Navbar />
    <section className="pt-28 pb-10" style={{ background: "var(--hero-gradient)" }}>
      <div className="container text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6">
            <Megaphone size={14} /> SMM Pricing
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">Social Media Management Plans</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Choose the plan that fits your business. All plans include professional content creation and strategic management.</p>
        </motion.div>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {packages.map((pkg, i) => (
            <motion.div key={pkg.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className={`bg-card border rounded-xl p-6 flex flex-col relative ${pkg.badge === "Most Popular" ? "border-primary glow-primary-sm" : pkg.badge ? "border-primary/50" : "border-border"}`}>
              {pkg.badge && (
                <span className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ${pkg.badge === "Most Popular" ? "bg-primary text-primary-foreground" : "bg-primary/20 text-primary"}`}>
                  {pkg.badge}
                </span>
              )}
              <h3 className="font-bold text-foreground text-lg mt-1">{pkg.name}</h3>
              <div className="mt-2 mb-4">
                <span className="text-2xl font-extrabold text-primary">{pkg.price}</span>
                <span className="text-sm text-muted-foreground">{pkg.period}</span>
              </div>
              <ul className="space-y-2 flex-1 mb-6">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant={pkg.badge === "Most Popular" ? "default" : "outline"} asChild>
                <Link to="/#contact">Choose Plan</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-primary/5 border-y border-primary/10">
      <div className="container text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">Not Sure Which Plan?</h2>
        <p className="text-muted-foreground mb-6">Talk to our team and we'll recommend the best plan for your business.</p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/#contact">Contact Us <ArrowRight size={18} className="ml-1" /></Link>
        </Button>
      </div>
    </section>
    <Footer />
  </>
);

export default SMMPricing;
