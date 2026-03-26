import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card/30 py-16">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <p className="text-xl font-extrabold text-foreground mb-4">Makes & Made<span className="text-primary"> Developers</span></p>
          <p className="text-sm text-muted-foreground leading-relaxed">We don't just build — we deliver results that grow your business.</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-4">Services</p>
          <div className="space-y-3">
            <Link to="/services/website-development" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Website Development</Link>
            <Link to="/services/social-media-management" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Social Media Management</Link>
            <Link to="/services/seo" className="block text-sm text-muted-foreground hover:text-primary transition-colors">SEO</Link>
            <Link to="/services/app-development" className="block text-sm text-muted-foreground hover:text-primary transition-colors">App Development</Link>
          </div>
        </div>
        <div>
          <p className="font-bold text-foreground mb-4">Company</p>
          <div className="space-y-3">
            <Link to="/#why-us" className="block text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link>
            <Link to="/#portfolio" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Portfolio</Link>
            <Link to="/#testimonials" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Testimonials</Link>
            <Link to="/#contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <p className="font-bold text-foreground mb-4">Contact</p>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>contact@makesandmade.com</p>
            <p>+91 98765 43210</p>
            <p>India</p>
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-10 pt-8 text-center">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Makes & Made Developers. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
