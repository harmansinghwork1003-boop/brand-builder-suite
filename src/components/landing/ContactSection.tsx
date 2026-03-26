import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const serviceOptions = [
  "Website Development",
  "Social Media Management",
  "SEO",
  "App Development",
  "Google Ads & Meta Ads",
  "Branding & Design",
  "Video Editing",
  "Technical Support",
  "Other",
];

const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };

const ContactSection = () => {
  const [searchParams] = useSearchParams();
  const preselected = searchParams.get("service") || "";
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="container relative">
        <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} transition={{ duration: 0.4, ease: "easeOut" }} className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">Get In Touch</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground">
            Let's Build Something That <span className="gradient-text">Actually Works</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">Ready to grow your business? Tell us about your project.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          <motion.form onSubmit={handleSubmit} initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} transition={{ duration: 0.4, ease: "easeOut" }} className="lg:col-span-3 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input name="name" placeholder="Your Name" required className="bg-card h-12 rounded-xl border-border/50 focus:border-primary/50" />
              <Input name="email" type="email" placeholder="Email Address" required className="bg-card h-12 rounded-xl border-border/50 focus:border-primary/50" />
            </div>
            <Input name="phone" type="tel" placeholder="Phone Number" className="bg-card h-12 rounded-xl border-border/50 focus:border-primary/50" />
            <select name="service" defaultValue={preselected} className="w-full h-12 rounded-xl border border-border/50 bg-card px-3 text-sm text-foreground focus:border-primary/50 focus:outline-none transition-colors duration-[350ms]">
              <option value="">Select a Service</option>
              {serviceOptions.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <Textarea name="message" placeholder="Tell us about your project..." rows={4} required className="bg-card rounded-xl border-border/50 focus:border-primary/50" />
            <Button type="submit" size="lg" disabled={loading} className="w-full sm:w-auto">
              {loading ? "Sending..." : "Send Message"} <Send size={16} className="ml-1" />
            </Button>
          </motion.form>

          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }} className="lg:col-span-2 space-y-6">
            {[
              { icon: Mail, label: "Email", value: "contact@makesandmade.com" },
              { icon: Phone, label: "Phone", value: "+91 98765 43210" },
              { icon: MapPin, label: "Location", value: "India" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{item.label}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
