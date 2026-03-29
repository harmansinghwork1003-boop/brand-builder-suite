import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Megaphone } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const packages = [
  {
    name: "Basic Lite",
    price: "₹10,000",
    period: "/month",
    features: ["1 Platform (Instagram or Facebook)", "12 Professional Posts/Month", "4 Reels / Short Videos", "Caption Writing + Hashtag Research", "Page/Profile Optimization", "Monthly Content Calendar", "Basic Comment Monitoring", "Monthly Performance Report"],
  },
  {
    name: "Basic Plus",
    price: "₹12,000",
    period: "/month",
    features: ["2 Platforms (Instagram + Facebook)", "14 Professional Posts/Month", "6 Reels / Short Videos", "Caption Writing + Hashtag Strategy", "Profile Optimization + Highlights Setup", "Highlights Management", "Basic Engagement Monitoring", "Monthly Analytics Report", "Content Planning Support"],
  },
  {
    name: "Growth Standard",
    price: "₹14,000",
    period: "/month",
    features: ["2 Platforms", "16 Professional Posts/Month", "8 Reels / Short Videos", "Professional Graphic Design", "Advanced Hashtag Strategy", "Content Calendar Planning", "Engagement Management", "Competitor Analysis", "Highlights Management", "Monthly Performance Report"],
  },
  {
    name: "Growth Advanced",
    price: "₹16,000",
    period: "/month",
    features: ["3 Platforms (IG, FB, LinkedIn/Twitter)", "20 Professional Posts/Month", "10 Reels / Short Videos", "Professional Graphics & Creatives", "Advanced Caption + Hashtag Strategy", "Content Calendar & Strategy Planning", "Competitor Research & Market Insights", "Engagement & Comment Management", "Profile Optimization & Brand Consistency", "Monthly Analytics Report"],
  },
  {
    name: "Premium Pro",
    price: "₹19,000",
    period: "/month",
    features: ["3 Platforms", "24 Premium Posts/Month", "12 High-Quality Reels / Videos", "Advanced Graphic Design & Brand Visuals", "Professional Video Editing", "Strategic Content Calendar", "Competitor Analysis & Market Insights", "Audience Insights Analysis", "Monthly Growth Report", "Monthly Strategy Consultation"],
  },
  {
    name: "Premium Elite",
    price: "₹23,000",
    period: "/month",
    badge: "Most Popular",
    features: ["4 Platforms", "35 Premium Posts/Month", "20 High-Quality Reels / Videos", "Advanced Graphics & Premium Visuals", "Professional Video Editing", "Strategic Content Planning", "Competitor & Market Research", "Engagement Management", "Advanced Hashtag & Keyword Strategy", "Brand Positioning Consultation", "Facebook & Instagram Ads Setup", "Ad Campaign Creation & Targeting", "Monthly Ad Performance Report", "(Ad spend paid separately)"],
  },
  {
    name: "Business Package",
    price: "₹30,000",
    period: "/month",
    badge: "Premium",
    features: ["All Major Platforms (IG, FB, LinkedIn, X, YouTube)", "45–50 Premium Posts/Month", "25+ High-Quality Reels / Videos", "Complete Branding & Graphic Design", "Professional Video Editing", "Full Content Strategy & Campaigns", "FB & IG Ads Management", "Influencer Collaboration Strategy", "Weekly Analytics Tracking", "Monthly Growth Report", "Highlights Design & Management", "Brand Visual Identity Management", "Dedicated Account Manager", "Priority Support", "Monthly Strategy Meeting"],
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
