import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const portfolioCategories = [
  {
    name: "Fitness",
    images: [
      "https://i.pinimg.com/1200x/aa/44/1f/aa441fefbc65e19d9a53f5735f377254.jpg",
      "https://i.pinimg.com/736x/24/13/5b/24135b14afeccd609da767f44e8d725d.jpg",
      "https://i.pinimg.com/736x/fe/80/c7/fe80c757e26fcea94a0352101a4f590a.jpg",
      "https://i.pinimg.com/1200x/0e/92/b1/0e92b1b53866a61f14ab843a43db8100.jpg",
      "https://i.pinimg.com/736x/2c/9c/46/2c9c46115f78095a77449c998811628a.jpg",
      "https://i.pinimg.com/1200x/18/34/9c/18349cce8eb78bdeab4a70fbd4ad3cc6.jpg",
      "https://i.pinimg.com/1200x/07/eb/99/07eb99ee0645adbd5e14301dbca8a70a.jpg",
      "https://i.pinimg.com/736x/a8/fd/d3/a8fdd3bfcb9267d5548a1c330cb0ae48.jpg",
      "https://i.pinimg.com/736x/63/78/b3/6378b3d11163e13a373c9b8f2f2e48b1.jpg",
      "https://i.pinimg.com/736x/a7/fe/3c/a7fe3c81eebed7e4fa3761a30b536572.jpg",
      "https://i.pinimg.com/1200x/e9/de/97/e9de97a1468c6d267d174200790dbf4a.jpg",
      "https://i.pinimg.com/736x/81/08/b1/8108b1dbe0afb22f77955685a23f730d.jpg",
      "https://i.pinimg.com/736x/20/fa/f9/20faf9ee938ffed8e0a78da87f1d41d8.jpg",
      "https://i.pinimg.com/736x/df/08/b3/df08b3329f0b0b56c30f708fa5280021.jpg",
      "https://i.pinimg.com/736x/01/72/39/01723911ef161347286b50623492627b.jpg",
      "https://i.pinimg.com/1200x/b0/ab/8a/b0ab8a8c0f4cea1a6a9ea026deff7799.jpg",
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
      "/videos/real-estate-1.mp4",
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
      "/videos/fashion-1.mp4",
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
      "/videos/fashion-2.mp4",
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
      "/videos/personal-branding-1.mp4",
      "https://i.pinimg.com/736x/a4/bb/7d/a4bb7dd0fb40ebd9a23ff9dcea4afc47.jpg",
      "/videos/personal-branding-2.mp4",
      "https://i.pinimg.com/736x/a2/2b/8d/a22b8df0357f4d4e0cb6038f2da0ca34.jpg",
      "/videos/personal-branding-3.mp4",
      
      "/videos/personal-branding-4.mp4",
      "https://i.pinimg.com/736x/62/eb/a9/62eba928d8524bdf810e892b6d7ed196.jpg",
    ],
  },
];

const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };

const PortfolioSection = () => {
  const [openGallery, setOpenGallery] = useState<string | null>(null);
  const activeCategory = portfolioCategories.find((c) => c.name === openGallery);

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} transition={{ duration: 0.4, ease: "easeOut" }} className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">Portfolio</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground">
            Our Work in <span className="gradient-text">Social Media</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">Real projects, real results. Here's what we've created for businesses serious about growth.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {portfolioCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}
              className="card-premium group overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-8px_hsl(var(--primary)/0.25)]"
              onClick={() => setOpenGallery(cat.name)}
            >
              <div className="h-48 relative overflow-hidden">
                <img src={cat.images[0]} alt={cat.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-foreground text-lg">{cat.name}</h3>
                <p className="text-primary text-sm font-medium mt-1">{cat.images.length} posts · View Gallery →</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-y-auto"
            onClick={() => setOpenGallery(null)}
          >
            <div className="container py-8" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-foreground">{activeCategory.name}</h3>
                <button onClick={() => setOpenGallery(null)} className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                  <X className="w-5 h-5 text-foreground" />
                </button>
              </div>
              <div className="columns-2 md:columns-3 gap-4 space-y-4">
                {activeCategory.images.map((src, idx) => (
                  src.endsWith('.mp4') ? (
                    <video key={idx} src={src} controls playsInline className="w-full rounded-lg break-inside-avoid" />
                  ) : (
                    <img key={idx} src={src} alt={`${activeCategory.name} ${idx + 1}`} loading="lazy" className="w-full rounded-lg break-inside-avoid" />
                  )
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
