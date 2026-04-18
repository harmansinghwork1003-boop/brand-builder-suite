import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Linkedin, Target, Heart, Sparkles, Shield, ArrowRight } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import team5 from "@/assets/team-5.jpg";
import team6 from "@/assets/team-6.jpg";

const team = [
  {
    name: "Aarav Sharma",
    role: "Founder & CEO",
    bio: "8+ years building digital brands. Obsessed with growth, design, and shipping work that moves the needle.",
    image: team1,
    linkedin: "https://linkedin.com",
  },
  {
    name: "Priya Mehta",
    role: "Creative Director",
    bio: "Storyteller turning brand ideas into scroll-stopping content across platforms.",
    image: team2,
    linkedin: "https://linkedin.com",
  },
  {
    name: "Rohan Verma",
    role: "Lead Developer",
    bio: "Full-stack engineer crafting fast, scalable websites and apps with modern tech.",
    image: team3,
    linkedin: "https://linkedin.com",
  },
  {
    name: "Ananya Iyer",
    role: "Head of Marketing",
    bio: "Performance marketer focused on ROI driven campaigns and audience growth.",
    image: team4,
    linkedin: "https://linkedin.com",
  },
  {
    name: "Karan Patel",
    role: "SEO & Growth Strategist",
    bio: "Data driven SEO specialist helping brands rank, convert, and scale organically.",
    image: team5,
    linkedin: "https://linkedin.com",
  },
  {
    name: "Sneha Kapoor",
    role: "Lead UI/UX Designer",
    bio: "Designs interfaces that feel effortless and convert visitors into customers.",
    image: team6,
    linkedin: "https://linkedin.com",
  },
];

const values = [
  {
    icon: Target,
    title: "Results First",
    desc: "We measure success by your growth, not our deliverables.",
  },
  {
    icon: Heart,
    title: "Real Partnership",
    desc: "We treat your brand like ours. No hand offs, no excuses.",
  },
  {
    icon: Sparkles,
    title: "Crafted Quality",
    desc: "Every pixel and line of code is built with intention.",
  },
  {
    icon: Shield,
    title: "Transparent Always",
    desc: "Clear pricing, honest timelines, and weekly progress updates.",
  },
];

const stats = [
  { value: "120+", label: "Projects Delivered" },
  { value: "85+", label: "Happy Clients" },
  { value: "6+", label: "Years Combined" },
  { value: "4.9★", label: "Average Rating" },
];

const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };

const About = () => {
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
              ABOUT US
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6">
              The team behind your{" "}
              <span className="gradient-text">next big win</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are a small, senior team of designers, developers, and marketers
              building digital brands that actually grow. No fluff, no agencies of
              agencies. Just real people doing real work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 section-padding">
        <div className="container max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="card-premium p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Makes & Made Developers started with one frustration. Too many
                businesses were paying premium prices for cookie cutter websites,
                generic social media posts, and marketing reports nobody read.
              </p>
              <p>
                We believed brands deserved better. So we built a studio where
                strategy, design, code, and content live under one roof. Every
                project is led by a senior, every campaign is built around real
                data, and every client gets a direct line to the people doing the
                work.
              </p>
              <p>
                Today we partner with founders, D2C brands, and ambitious
                businesses across India and beyond. Our promise is simple. We
                ship work that looks premium, performs hard, and pays for itself.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 section-padding">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card-premium p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-extrabold gradient-text mb-2">
                  {s.value}
                </div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 section-padding">
        <div className="container max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What we stand for
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Four principles that guide every decision we make for your brand.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card-premium p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <v.icon className="text-primary" size={22} />
                </div>
                <h3 className="font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 section-padding">
        <div className="container max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-4">
              MEET THE TEAM
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Real people. Real expertise.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The senior crew personally working on your project from day one.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="card-premium p-6 group"
              >
                <div className="relative overflow-hidden rounded-xl mb-5 aspect-square bg-muted">
                  <img
                    src={m.image}
                    alt={`${m.name}, ${m.role} at Makes & Made Developers`}
                    width={512}
                    height={512}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="font-bold text-foreground text-lg leading-tight">
                      {m.name}
                    </h3>
                    <p className="text-sm text-primary font-medium">{m.role}</p>
                  </div>
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${m.name} on LinkedIn`}
                    className="shrink-0 w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {m.bio}
                </p>
              </motion.div>
            ))}
          </div>
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
              Ready to work with us?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Limited slots open this month. Book a free consultation before
              we close intake.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" variant="hero" asChild>
                <Link to="/#contact">
                  Get Started <ArrowRight size={18} />
                </Link>
              </Button>
              <Button size="lg" variant="hero-outline" asChild>
                <Link to="/#portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
