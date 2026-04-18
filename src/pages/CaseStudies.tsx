import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, DollarSign, Eye, ShoppingBag, Star } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    industry: "D2C Fashion Brand",
    title: "From 2k followers to 84k in 6 months",
    challenge:
      "A Delhi-based ethnic wear startup had a beautiful product but zero online traction. Inconsistent posting, generic content, and no paid strategy meant orders were stuck under 30 a month.",
    solution:
      "We rebuilt their content pillars, launched a daily reels engine, ran a structured Meta ads funnel, and partnered with 12 micro-influencers in tier-2 cities.",
    duration: "6 months",
    services: ["Social Media Management", "Paid Ads", "Influencer Strategy"],
    metrics: [
      { icon: Users, label: "Instagram Followers", before: "2,100", after: "84,300", change: "+3,914%" },
      { icon: ShoppingBag, label: "Monthly Orders", before: "28", after: "612", change: "+2,085%" },
      { icon: DollarSign, label: "Monthly Revenue", before: "₹84k", after: "₹19.4L", change: "+2,210%" },
      { icon: TrendingUp, label: "Return on Ad Spend", before: "1.2x", after: "5.8x", change: "+383%" },
    ],
    quote:
      "We were burning money on random posts. The team gave us a system. Six months later we hired our first full-time staff because of the order volume.",
    author: "Founder, Ethnic Wear D2C Brand",
  },
  {
    industry: "Restaurant Chain",
    title: "3 outlet chain hits 92% weekend occupancy",
    challenge:
      "A 3-outlet North Indian restaurant chain in Pune was losing weekend traffic to newer competitors. Their Zomato rating was sliding and Instagram looked dead.",
    solution:
      "Daily food reels, geo-targeted ads with reservation CTAs, weekly user-generated content campaigns, and a full Google Business Profile overhaul across all 3 locations.",
    duration: "4 months",
    services: ["Social Media Management", "Local SEO", "Google Ads"],
    metrics: [
      { icon: Eye, label: "Reach per Month", before: "12k", after: "418k", change: "+3,383%" },
      { icon: Users, label: "Walk-ins (Weekend)", before: "180", after: "640", change: "+255%" },
      { icon: Star, label: "Avg Google Rating", before: "3.9★", after: "4.7★", change: "+0.8" },
      { icon: TrendingUp, label: "Weekend Occupancy", before: "47%", after: "92%", change: "+96%" },
    ],
    quote:
      "Our Saturday waitlist is now an hour long. We opened our 4th outlet last month, fully on the back of the visibility this team built.",
    author: "Owner, Restaurant Chain",
  },
  {
    industry: "Real Estate Developer",
    title: "₹14.2 Cr in inventory cleared in 90 days",
    challenge:
      "A mid-sized Bangalore developer had 28 unsold premium 3BHK units sitting for over a year. Old website, no lead funnel, and brokers were the only channel.",
    solution:
      "Conversion-focused landing page, premium drone walkthroughs, targeted Meta and Google lead ads, plus a CRM-integrated WhatsApp follow-up system.",
    duration: "3 months",
    services: ["Website Development", "Paid Ads", "Lead Funnel"],
    metrics: [
      { icon: Users, label: "Qualified Leads", before: "8/mo", after: "187/mo", change: "+2,237%" },
      { icon: ShoppingBag, label: "Site Visits Booked", before: "12", after: "94", change: "+683%" },
      { icon: TrendingUp, label: "Units Sold", before: "0", after: "21 of 28", change: "75% cleared" },
      { icon: DollarSign, label: "Revenue Generated", before: "₹0", after: "₹14.2 Cr", change: "in 90 days" },
    ],
    quote:
      "We had given up on those units. The campaign paid for itself in the first week. We are now their long-term partner across all new launches.",
    author: "Sales Director, Real Estate Developer",
  },
];

const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 section-padding">
        <div className="container max-w-4xl text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-6">
              CASE STUDIES
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6">
              Real numbers. Real{" "}
              <span className="gradient-text">ROI</span>.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We don't sell deliverables. We sell outcomes. Here is exactly how
              three of our clients turned a marketing spend into measurable
              business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Headline stats */}
      <section className="pb-16 section-padding">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "₹47 Cr+", label: "Revenue generated for clients" },
              { value: "5.8x", label: "Average ROAS achieved" },
              { value: "120+", label: "Projects delivered" },
              { value: "94%", label: "Client retention rate" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card-premium p-5 text-center"
              >
                <div className="text-2xl md:text-3xl font-extrabold gradient-text mb-1">
                  {s.value}
                </div>
                <div className="text-xs text-muted-foreground leading-tight">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-20 section-padding">
        <div className="container max-w-5xl space-y-12">
          {caseStudies.map((cs, i) => (
            <motion.article
              key={cs.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="card-premium p-8 md:p-12"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {cs.industry}
                </span>
                <span className="text-xs text-muted-foreground">
                  · {cs.duration} engagement
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                {cs.title}
              </h2>

              {/* Metrics grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10">
                {cs.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-border bg-card/50 p-4"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <m.icon className="text-primary" size={16} />
                      <span className="text-xs text-muted-foreground font-medium leading-tight">
                        {m.label}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs text-muted-foreground">
                        Before:{" "}
                        <span className="text-foreground/70 line-through">
                          {m.before}
                        </span>
                      </div>
                      <div className="text-lg md:text-xl font-extrabold text-foreground">
                        {m.after}
                      </div>
                      <div className="text-xs font-semibold text-primary">
                        {m.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Challenge / Solution */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                    The Challenge
                  </h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {cs.challenge}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                    What We Did
                  </h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {cs.solution}
                  </p>
                </div>
              </div>

              {/* Services tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {cs.services.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="border-l-2 border-primary pl-5 py-1">
                <p className="text-base md:text-lg text-foreground/90 italic leading-relaxed mb-2">
                  "{cs.quote}"
                </p>
                <footer className="text-sm text-muted-foreground">
                  — {cs.author}
                </footer>
              </blockquote>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-padding">
        <div className="container max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="card-premium p-10 md:p-14 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Want numbers like these for your brand?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Limited slots open this month. Book a free strategy call before
              we close intake.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" variant="hero" asChild>
                <Link to="/#contact">
                  Get Started <ArrowRight size={18} />
                </Link>
              </Button>
              <Button size="lg" variant="hero-outline" asChild>
                <Link to="/#portfolio">View Portfolio</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
