import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Megaphone, FileText, Video, BarChart3, Users, X } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const benefits = [
  { icon: FileText, title: "Custom Content Creation", desc: "Posts, carousels, and graphics tailored to your brand voice." },
  { icon: Video, title: "Reels & Video Content", desc: "Engaging short-form videos that boost reach and engagement." },
  { icon: Users, title: "Community Engagement", desc: "Active audience interaction to build loyal followers." },
  { icon: BarChart3, title: "Strategy & Analytics", desc: "Data-driven strategies with monthly performance reports." },
];

const process = [
  { step: "01", title: "Brand Analysis", desc: "We study your brand, audience, and competitors." },
  { step: "02", title: "Content Strategy", desc: "We create a monthly content calendar aligned with your goals." },
  { step: "03", title: "Content Creation", desc: "Design posts, write captions, produce reels." },
  { step: "04", title: "Publish & Engage", desc: "Schedule content and actively engage with your audience." },
  { step: "05", title: "Report & Optimize", desc: "Monthly analytics reports with strategy adjustments." },
];

const portfolioCategories = [
  {
    name: "Fitness",
    images: [
      "https://i.pinimg.com/1200x/aa/44/1f/aa441fefbc65e19d9a53f5735f377254.jpg",
      "https://i.pinimg.com/736x/24/13/5b/24135b14afeccd609da767f44e8d725d.jpg",
      "https://i.pinimg.com/736x/fe/80/c7/fe80c757e26fcea94a0352101a4f590a.jpg",
    ],
  },
  {
    name: "Restaurants",
    images: [
      "https://i.pinimg.com/736x/2b/63/d1/2b63d119ef137f6a0c7d323623d5b5b2.jpg",
      "https://i.pinimg.com/1200x/7e/48/e1/7e48e163576d4cdaf4f44297d710f1d0.jpg",
      "https://i.pinimg.com/736x/3e/81/76/3e8176f39429e560963bc6636bb53d20.jpg",
      "https://i.pinimg.com/736x/e4/b9/68/e4b968ca666077cde7ef100be43b6a04.jpg",
      "https://i.pinimg.com/736x/6c/3d/97/6c3d97a6bb1e90c94394eaaa67e645b3.jpg",
      "https://i.pinimg.com/1200x/7c/5e/d1/7c5ed121c13c65dc37288d608779b73a.jpg",
      "https://i.pinimg.com/736x/d9/f6/e1/d9f6e1b00a30f3f82f8a666052a55d60.jpg",
      "https://i.pinimg.com/1200x/3a/de/25/3ade25d7d87a155dffc5fa9317bf792b.jpg",
      "https://i.pinimg.com/736x/e1/21/93/e12193f9b1b4a84da42f99e1d4ee0bf6.jpg",
      "https://i.pinimg.com/736x/46/49/d6/4649d603723dcf2fdfe2d29e82289b54.jpg",
      "https://i.pinimg.com/474x/4b/3f/78/4b3f78ebde0b911923dbf9f6f0f1d530.jpg",
      "https://i.pinimg.com/736x/4f/83/f4/4f83f49f459821ecbe1e658fb800d9eb.jpg",
      "https://i.pinimg.com/1200x/bb/c0/18/bbc01859463d701798eb1d9d4e195e64.jpg",
      "https://i.pinimg.com/474x/5e/3d/2e/5e3d2e3156807cec48971feda56282eb.jpg",
      "https://i.pinimg.com/736x/f8/02/ae/f802aeef8af282288ed46253f5cb33be.jpg",
      "https://i.pinimg.com/1200x/15/9d/91/159d91924d5f081a9af31269f5809805.jpg",
      "https://i.pinimg.com/736x/91/29/d9/9129d91408bd2c4658b4a2d583d3e09b.jpg",
      "https://i.pinimg.com/1200x/c3/09/39/c30939e48734d95102c98fce90ef99f3.jpg",
      "https://i.pinimg.com/736x/f7/ce/07/f7ce07793ba8db17c8aab5c08ff49639.jpg",
      "https://i.pinimg.com/736x/cc/43/4c/cc434c8e65b614c7381ac852d3993a8c.jpg",
      "https://i.pinimg.com/736x/29/35/c6/2935c68c672de981b93cbeb3d1a150f1.jpg",
      "https://i.pinimg.com/1200x/a8/b5/cb/a8b5cb131d378763ed2250b65d6fb2e3.jpg",
      "https://i.pinimg.com/1200x/9c/98/9d/9c989d614dc9242d67a84494b8b9a490.jpg",
      "https://i.pinimg.com/736x/38/7e/12/387e12fd48ca4600ea5ef8228bfafd83.jpg",
      "https://i.pinimg.com/736x/db/13/50/db1350b65da38f701ac60b761d104d41.jpg",
      "https://i.pinimg.com/736x/9f/7f/38/9f7f38cc4b8c503b0815376725f50f02.jpg",
      "https://i.pinimg.com/736x/84/3e/14/843e143242e9afc35885d3ed281874d0.jpg",
      "https://i.pinimg.com/736x/1e/cc/6c/1ecc6c15d4a21ddafa548b1d65d02a62.jpg",
      "https://i.pinimg.com/1200x/8c/e1/a6/8ce1a680bbdc52669ee727150b09afb9.jpg",
      "https://i.pinimg.com/1200x/3f/4b/ea/3f4bea3adc92c5211ca3b72169e09427.jpg",
      "https://i.pinimg.com/1200x/af/f4/04/aff404f526c92d571cfc324ec87133c0.jpg",
      "https://i.pinimg.com/1200x/47/2a/b0/472ab0694c5da347e988cc47bd7d78d3.jpg",
      "https://i.pinimg.com/1200x/64/0a/43/640a43f3fd85a26c1e33b6fe8c037654.jpg",
      "https://i.pinimg.com/736x/5f/99/cd/5f99cd77e9dc59b40b45eba9cbcc2510.jpg",
      "https://i.pinimg.com/736x/01/e4/9d/01e49dc132d4468c844fb0ab5608a346.jpg",
      "https://i.pinimg.com/736x/07/ae/26/07ae26e4a321d743d9025ea72ade1d43.jpg",
      "https://i.pinimg.com/736x/75/26/10/7526108c7ac5adb76d1cf863db21df8a.jpg",
      "https://i.pinimg.com/736x/02/d8/6a/02d86a67736a04423b161773d07f7391.jpg",
    ],
  },
  {
    name: "Real Estate",
    images: [
      "https://i.pinimg.com/1200x/ec/f2/7a/ecf27a9dc07ac5b6cf90d1b716b71299.jpg",
      "https://i.pinimg.com/736x/74/bc/00/74bc001aa042cb6fbbff23d2cbf656e6.jpg",
      "https://i.pinimg.com/1200x/8e/99/4d/8e994dc5b648b56965642d4ef7f34476.jpg",
      "https://i.pinimg.com/736x/bb/2a/5b/bb2a5b8997499652aac9cbbd0eb956df.jpg",
      "https://i.pinimg.com/736x/94/4a/12/944a126df95a80687ca1c933b16d58b4.jpg",
      "https://i.pinimg.com/736x/97/10/6b/97106be1f5f1a5b6db39105bf4074d21.jpg",
      "https://i.pinimg.com/1200x/5f/fb/a2/5ffba2cf7545db5d9b4c2bd30e534196.jpg",
      "https://i.pinimg.com/736x/ed/d3/68/edd368e9fb32508965ec47089027a4b5.jpg",
      "https://i.pinimg.com/474x/3c/a2/fb/3ca2fbefab0663380bb69e4fe0401595.jpg",
      "https://i.pinimg.com/736x/47/4c/d6/474cd6459f20487a22e89873f52b3f07.jpg",
      "https://i.pinimg.com/1200x/9d/fd/06/9dfd06691bcd335e0409a9159dcb8626.jpg",
      "https://i.pinimg.com/736x/e9/d6/88/e9d688e3b045a47ccf56cddeb00dcdc2.jpg",
      "https://i.pinimg.com/736x/c8/9e/ea/c89eea0f36a56a305c15ffc68b9f0e80.jpg",
      "https://i.pinimg.com/474x/45/11/8a/45118a51c3aff3dbd60e5a0314a92552.jpg",
      "https://i.pinimg.com/736x/58/e5/ce/58e5ce7dd757fc4e95c01a9d7ee3d909.jpg",
      "https://i.pinimg.com/1200x/f8/2e/2d/f82e2d88e23cd52aa21573d883aa212a.jpg",
    ],
  },
  {
    name: "Fashion",
    images: [
      "https://i.pinimg.com/1200x/09/da/a4/09daa436d76ce4a033338c2380be5cda.jpg",
      "https://i.pinimg.com/736x/b2/fa/1e/b2fa1e773bf84519023d806147eb20ae.jpg",
      "https://i.pinimg.com/736x/1e/66/22/1e66229a09b01153db793ae8df3600ce.jpg",
      "https://i.pinimg.com/736x/7d/0b/7f/7d0b7fe15d3e650dc2d131d0e7a79d64.jpg",
      "https://i.pinimg.com/1200x/0e/00/69/0e00698f7f1a272a00f6dde3b64303e8.jpg",
      "https://i.pinimg.com/736x/9e/00/29/9e0029af62f3c65888a9c1e629893d02.jpg",
      "https://i.pinimg.com/1200x/d1/82/a6/d182a6c8a3624a005dbc94a45412e7db.jpg",
      "https://i.pinimg.com/736x/90/90/13/90901318d02830a30ff6c17d956187b5.jpg",
      "https://i.pinimg.com/736x/3c/1c/e2/3c1ce2a4308e7c63cb8ecb2fcf3e9727.jpg",
      "https://i.pinimg.com/1200x/b0/60/21/b0602147d3478d3137fa43f8a2e80763.jpg",
      "https://i.pinimg.com/736x/42/28/6f/42286f12c40108d2224ffaddf198374c.jpg",
      "https://i.pinimg.com/736x/29/25/91/292591b405ff2100e07d9aacbc160139.jpg",
      "https://i.pinimg.com/736x/26/b3/c4/26b3c4ffdb20b01bb1e177655e994e9c.jpg",
      "https://i.pinimg.com/736x/57/84/0c/57840ced0adac7c90c5c596ff121d5a7.jpg",
      "https://i.pinimg.com/1200x/2a/ef/75/2aef755f4902894acd3a3691737fd009.jpg",
      "https://i.pinimg.com/1200x/83/77/b8/8377b818768e5286864b5fa2f88224ad.jpg",
      "https://i.pinimg.com/1200x/56/d5/6e/56d56e27603c9a4b626057bfa4e6f50f.jpg",
      "https://i.pinimg.com/736x/c0/0f/e9/c00fe94865234f1472437f85c9cb3b58.jpg",
      "https://i.pinimg.com/1200x/47/fa/0c/47fa0c80ad5c5d7cea4567739549798f.jpg",
      "https://i.pinimg.com/736x/10/67/5c/10675c8563ac3e8dfb59bfd0274c5ccf.jpg",
      "https://i.pinimg.com/1200x/ce/28/bd/ce28bdacce737650bac660095bfbb707.jpg",
      "https://i.pinimg.com/736x/02/5e/15/025e15303104a64910e12189b96a383b.jpg",
      "https://i.pinimg.com/1200x/fa/c6/11/fac611cd46ac95127d507094ed621a22.jpg",
      "https://i.pinimg.com/1200x/6d/06/d5/6d06d535c61986f32179039e1b8322f1.jpg",
      "https://i.pinimg.com/736x/b4/b6/ac/b4b6acbf1f501e22d7fd8622f88e99e6.jpg",
      "https://i.pinimg.com/736x/b4/43/f4/b443f4e4327c1a791db44e217971582b.jpg",
      "https://i.pinimg.com/736x/bd/f9/d6/bdf9d62232e731463b62be6253c4d0f1.jpg",
      "https://i.pinimg.com/1200x/75/c9/44/75c94489a22664ede26433668e7711ba.jpg",
      "https://i.pinimg.com/736x/d0/47/0b/d0470b84183be314c9f42e73f225a58e.jpg",
      "https://i.pinimg.com/736x/47/e5/b8/47e5b85a7ab57bfedd98ec517849776f.jpg",
      "https://i.pinimg.com/1200x/92/b5/97/92b597efcbfd118a65281f8e9ab67496.jpg",
      "https://i.pinimg.com/736x/b5/7e/99/b57e995f79cc0cf0afde4fa0bc440aec.jpg",
      "https://i.pinimg.com/1200x/8c/f3/08/8cf308b3b372983a1afd2341cf574653.jpg",
      "https://i.pinimg.com/1200x/59/13/76/5913766b1e90301f5372cca0fd446e28.jpg",
      "https://i.pinimg.com/736x/49/64/45/496445bf157d24e5e76010df65bf8e10.jpg",
      "https://i.pinimg.com/1200x/42/27/7c/42277c6ee51bb0a9ae700aade699a05b.jpg",
      "https://i.pinimg.com/1200x/6d/f7/fc/6df7fcae7dd097948c5204cd02e3e524.jpg",
      "https://i.pinimg.com/736x/8d/90/f8/8d90f8aca9ddef09adb562114326e595.jpg",
      "https://i.pinimg.com/736x/d6/86/ab/d686abb82ae9c13e81987c7572fcb386.jpg",
      "https://i.pinimg.com/1200x/97/aa/cc/97aacc2dc03b9048cde368c4ea7893a0.jpg",
      "https://i.pinimg.com/736x/90/39/54/9039545e8b5f5ccf3f76025410f5f705.jpg",
      "https://i.pinimg.com/1200x/dd/db/2f/dddb2f2e2ab9717ad1c4f77b116da8f0.jpg",
      "https://i.pinimg.com/1200x/36/75/ab/3675ab5e5bceb33cfc879423dc5201a6.jpg",
      "https://i.pinimg.com/736x/29/9c/da/299cda1285145e090aa1529974b3546d.jpg",
      "https://i.pinimg.com/1200x/49/60/13/49601389a0012cd7c2f20c20aa3bac65.jpg",
      "https://i.pinimg.com/1200x/47/16/5e/47165e6e151630e5fafbdcbfbec105f2.jpg",
      "https://i.pinimg.com/1200x/8f/7e/e1/8f7ee1e76679002ef6a1ebf5bc018c0b.jpg",
    ],
  },
  {
    name: "Personal Branding",
    images: [
      "https://i.pinimg.com/1200x/52/b4/09/52b409ba86ea9e31027cc31c391de442.jpg",
      "https://i.pinimg.com/736x/a4/bb/7d/a4bb7dd0fb40ebd9a23ff9dcea4afc47.jpg",
      "https://i.pinimg.com/736x/a2/2b/8d/a22b8df0357f4d4e0cb6038f2da0ca34.jpg",
      "https://i.pinimg.com/736x/e6/a5/aa/e6a5aaabb5bd0727c600d79e1901e463.jpg",
      "https://i.pinimg.com/736x/62/eb/a9/62eba928d8524bdf810e892b6d7ed196.jpg",
    ],
  },
];

const SocialMediaManagement = () => {
  const [openGallery, setOpenGallery] = useState<string | null>(null);
  const activeCategory = portfolioCategories.find((c) => c.name === openGallery);

  return (
    <>
      <Navbar />
      <section className="pt-28 pb-20" style={{ background: "var(--hero-gradient)" }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6">
              <Megaphone size={14} /> Social Media Management
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground leading-[1.1] mb-6">
              Grow Your Brand With <span className="text-primary">Strategic Social Media</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">Content creation, reels, engagement, and growth strategy — all managed by our expert team.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/services/social-media-management/pricing">View Plans <ArrowRight size={18} className="ml-1" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/#contact">Get a Quote</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-foreground">What You Get</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <b.icon size={22} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">Our Work</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">Portfolio</h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">Browse our work across different industries.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {portfolioCategories.map((cat, i) => (
              <motion.div key={cat.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_-8px_hsl(var(--primary)/0.2)]">
                <div className="h-44 overflow-hidden">
                  <img src={cat.images[0]} alt={cat.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-5 flex items-center justify-between">
                  <h3 className="font-bold text-foreground text-lg">{cat.name}</h3>
                  <Button size="sm" variant="outline" onClick={() => setOpenGallery(cat.name)}>
                    View Gallery
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      <AnimatePresence>
        {openGallery && activeCategory && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-y-auto"
            onClick={() => setOpenGallery(null)}>
            <div className="container py-8" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-foreground">{activeCategory.name} Portfolio</h2>
                <Button size="icon" variant="ghost" onClick={() => setOpenGallery(null)}>
                  <X size={20} />
                </Button>
              </div>
              <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
                {activeCategory.images.map((src, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}
                    className="break-inside-avoid rounded-lg overflow-hidden border border-border">
                    <img src={src} alt={`${activeCategory.name} ${i + 1}`} loading="lazy" className="w-full h-auto" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Process */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-foreground">Our SMM Process</h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {process.map((p, i) => (
              <motion.div key={p.step} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 bg-card border border-border rounded-lg p-4">
                <span className="text-primary font-bold text-lg">{p.step}</span>
                <div>
                  <h3 className="font-semibold text-foreground">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/5 border-y border-primary/10">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Dominate Social Media?</h2>
          <p className="text-muted-foreground mb-8">Choose a plan that fits your business and start growing today.</p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/services/social-media-management/pricing">View Plans <ArrowRight size={18} className="ml-1" /></Link>
          </Button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SocialMediaManagement;
