const Footer = () => (
  <footer className="border-t border-border bg-card py-12">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <p className="font-bold text-foreground mb-3">Makes & Made<span className="text-primary"> Developers</span></p>
          <p className="text-sm text-muted-foreground leading-relaxed">Building digital solutions that deliver real results. Quality, professionalism, and on-time delivery — every time.</p>
        </div>
        <div>
          <p className="font-semibold text-foreground text-sm mb-3">Services</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#services" className="hover:text-foreground transition-colors">Web Development</a></li>
            <li><a href="#services" className="hover:text-foreground transition-colors">App Development</a></li>
            <li><a href="#services" className="hover:text-foreground transition-colors">Digital Marketing</a></li>
            <li><a href="#services" className="hover:text-foreground transition-colors">IT Solutions</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-foreground text-sm mb-3">Company</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#why-us" className="hover:text-foreground transition-colors">About Us</a></li>
            <li><a href="#portfolio" className="hover:text-foreground transition-colors">Portfolio</a></li>
            <li><a href="#process" className="hover:text-foreground transition-colors">Our Process</a></li>
            <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-foreground text-sm mb-3">Contact</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>contact@makesandmade.com</li>
            <li>+91 98765 43210</li>
            <li>India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border mt-10 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Makes and Made Developers. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
