import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  { name: "Basic Lite", price: "₹10,000", period: "/mo", features: ["12 Posts/Month", "1 Platform", "4 Reels", "Hashtag Research", "Monthly Report"], popular: false },
  { name: "Basic Plus", price: "₹12,000", period: "/mo", features: ["14 Posts/Month", "2 Platforms", "6 Reels", "Hashtag Strategy", "Highlights Management", "Analytics Report"], popular: false },
  { name: "Growth Standard", price: "₹14,000", period: "/mo", features: ["16 Posts/Month", "2 Platforms", "8 Reels", "Competitor Analysis", "Engagement Management", "Monthly Report"], popular: false },
  { name: "Growth Advanced", price: "₹16,000", period: "/mo", features: ["20 Posts/Month", "3 Platforms", "10 Reels", "Market Insights", "Brand Consistency", "Monthly Analytics"], popular: false },
  { name: "Premium Pro", price: "₹19,000", period: "/mo", features: ["24 Premium Posts/Month", "3 Platforms", "12 Reels", "Video Editing", "Strategy Consultation", "Growth Report"], popular: false },
  { name: "Premium Elite", price: "₹23,000", period: "/mo", features: ["35 Premium Posts/Month", "4 Platforms", "20 Reels", "FB & IG Ads Setup", "Brand Positioning", "Ad Performance Report"], popular: true },
  { name: "Business Package", price: "₹30,000", period: "/mo", features: ["45–50 Posts/Month", "All Platforms", "25+ Reels", "Full Ads Management", "Dedicated Manager", "Priority Support"], popular: false },
];

const PackagesSection = () => (
  <section id="packages" className="py-24 bg-secondary/30">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Pricing</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Social Media Management Packages</h2>
        <p className="text-muted-foreground mt-3 max-w-md mx-auto">Choose the plan that fits your growth goals. All plans include strategy consultation.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className={`relative bg-card rounded-xl p-6 border transition-all duration-300 flex flex-col ${pkg.popular ? "border-primary shadow-elevated scale-[1.02]" : "border-border/60 shadow-card hover:shadow-card-hover"}`}
          >
            {pkg.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                Most Popular
              </div>
            )}
            <h3 className="font-bold text-foreground text-lg">{pkg.name}</h3>
            <div className="mt-3 mb-5">
              <span className="text-3xl font-extrabold text-foreground">{pkg.price}</span>
              <span className="text-sm text-muted-foreground">{pkg.period}</span>
            </div>
            <ul className="space-y-2.5 mb-6 flex-1">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Button variant={pkg.popular ? "default" : "outline"} className="w-full" asChild>
              <a href="#contact">Choose Plan</a>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PackagesSection;
