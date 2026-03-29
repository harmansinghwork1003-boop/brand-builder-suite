import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const RestaurantApp = () => (
  <>
    <Navbar />
    <section className="pt-28 pb-20" style={{ background: "var(--hero-gradient)" }}>
      <div className="container">
        <Button variant="ghost" size="sm" asChild className="mb-6 text-muted-foreground hover:text-foreground">
          <Link to="/#portfolio"><ArrowLeft size={16} className="mr-1" /> Back to Portfolio</Link>
        </Button>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="max-w-2xl">
          <span className="text-xs text-primary font-semibold uppercase tracking-wider">App</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2 mb-4">Restaurant App UI</h1>
          <p className="text-muted-foreground text-lg">A beautifully designed restaurant app with intuitive ordering, reservations, and menu browsing.</p>
        </motion.div>
      </div>
    </section>
    <section className="py-20 bg-background">
      <div className="container text-center">
        <div className="card-premium max-w-lg mx-auto p-12">
          <p className="text-muted-foreground text-lg mb-2">🚧 Coming Soon</p>
          <p className="text-muted-foreground/70 text-sm">Full case study and project details will be available shortly.</p>
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default RestaurantApp;
