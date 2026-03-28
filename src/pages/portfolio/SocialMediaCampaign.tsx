import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const reels = Array.from({ length: 9 }, (_, i) => `/videos/reel-${i + 1}.mp4`);

const SocialMediaCampaign = () => (
  <>
    <Navbar />
    <section className="pt-28 pb-10" style={{ background: "var(--hero-gradient)" }}>
      <div className="container">
        <Button variant="ghost" size="sm" asChild className="mb-6 text-muted-foreground hover:text-foreground">
          <Link to="/#portfolio"><ArrowLeft size={16} className="mr-1" /> Back to Portfolio</Link>
        </Button>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="max-w-2xl">
          <span className="text-xs text-primary font-semibold uppercase tracking-wider">Social Media</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2 mb-4">Social Media Brand Campaign</h1>
          <p className="text-muted-foreground text-lg">A collection of reels and video content we produced for our clients — designed to drive engagement and brand awareness.</p>
        </motion.div>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container">
        {/* Featured Reel */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
          className="max-w-sm mx-auto mb-12">
          <div className="relative rounded-2xl overflow-hidden border border-primary/30 shadow-[0_0_30px_-8px_hsl(var(--primary)/0.3)] aspect-[9/16]">
            <video src={reels[0]} controls preload="metadata" className="w-full h-full object-cover" />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-3 font-medium">Featured Reel</p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {reels.slice(1).map((src, i) => (
            <motion.div key={src} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.4 }}
              className="group relative rounded-xl overflow-hidden border border-border hover:border-primary/30 aspect-[9/16] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_-8px_hsl(var(--primary)/0.2)]">
              <video src={src} controls preload="metadata" className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default SocialMediaCampaign;
