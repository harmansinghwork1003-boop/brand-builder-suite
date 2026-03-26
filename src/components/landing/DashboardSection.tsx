import { motion } from "framer-motion";
import { BarChart3, FileText, Eye, Bell, Layout } from "lucide-react";

const features = [
  { icon: Layout, title: "Live Project Tracking", desc: "Monitor every deliverable — posts, reels, website builds — with real-time status updates." },
  { icon: BarChart3, title: "Performance Reports", desc: "Data-driven analytics showing exactly how your investment is performing." },
  { icon: Eye, title: "Content Approval System", desc: "Review, comment, and approve all creative assets before they go live." },
  { icon: Bell, title: "Milestone Notifications", desc: "Stay informed with instant alerts on progress, deadlines, and deliverables." },
  { icon: FileText, title: "Secure Document Hub", desc: "Contracts, invoices, brand assets — everything organized and accessible 24/7." },
];

const DashboardSection = () => (
  <section className="section-padding bg-card/30 relative overflow-hidden">
    {/* Background glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
    
    <div className="container relative">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">Client Dashboard</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground">
          Full Visibility, <span className="gradient-text">Total Control</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
          Every client gets a dedicated dashboard — track progress, approve content, view reports, and access documents. No follow-ups needed.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="card-premium p-7 group text-center"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-5 group-hover:glow-primary-sm transition-shadow duration-300">
              <f.icon size={24} />
            </div>
            <h3 className="font-bold text-foreground mb-2 text-lg">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DashboardSection;
