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
    <section id="contact" className="py-20 bg-background">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Let's Build Something That Actually Works</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Ready to grow your business? Tell us about your project.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input name="name" placeholder="Your Name" required className="bg-card" />
              <Input name="email" type="email" placeholder="Email Address" required className="bg-card" />
            </div>
            <Input name="phone" type="tel" placeholder="Phone Number" className="bg-card" />
            <select name="service" defaultValue={preselected} className="w-full h-10 rounded-md border border-input bg-card px-3 text-sm text-foreground">
              <option value="">Select a Service</option>
              {serviceOptions.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <Textarea name="message" placeholder="Tell us about your project..." rows={4} required className="bg-card" />
            <Button type="submit" size="lg" disabled={loading} className="w-full sm:w-auto">
              {loading ? "Sending..." : "Send Message"} <Send size={16} className="ml-1" />
            </Button>
          </motion.form>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0"><Mail size={18} /></div>
              <div>
                <p className="font-medium text-foreground text-sm">Email</p>
                <p className="text-sm text-muted-foreground">contact@makesandmade.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0"><Phone size={18} /></div>
              <div>
                <p className="font-medium text-foreground text-sm">Phone</p>
                <p className="text-sm text-muted-foreground">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0"><MapPin size={18} /></div>
              <div>
                <p className="font-medium text-foreground text-sm">Location</p>
                <p className="text-sm text-muted-foreground">India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
