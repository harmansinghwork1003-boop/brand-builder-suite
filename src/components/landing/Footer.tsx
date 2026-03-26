import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card/50 py-12">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <p className="text-lg font-bold text-foreground mb-3">Makes & Made<span className="text-primary"> Developers</span></p>
          <p className="text-sm text-muted-foreground leading-relaxed">We don't just build — we deliver results that grow your business.</p>
        </div>
        <div>
          <p className="font-semibold text-foreground mb-3 text-sm">Services</p>
          <div className="space-y-2">
            <Link to="/services/website-development" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Website Development</Link>
            <Link to="/services/social-media-management" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Social Media Management</Link>
            <Link to="/services/seo" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">SEO</Link>
            <Link to="/services/app-development" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">App Development</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold text-foreground mb-3 text-sm">Company</p>
          <div className="space-y-2">
            <Link to="/#why-us" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link>
            <Link to="/#portfolio" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Portfolio</Link>
            <Link to="/#testimonials" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Testimonials</Link>
            <Link to="/#contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold text-foreground mb-3 text-sm">Contact</p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>contact@makesandmade.com</p>
            <p>+91 98765 43210</p>
            <p>India</p>
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-8 pt-6 text-center">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Makes & Made Developers. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
