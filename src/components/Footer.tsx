import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="container py-16 grid gap-12 md:grid-cols-4">
      <div className="md:col-span-2">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <img src={logoIcon} alt="RunCommerce" className="h-8 w-8" width={32} height={32} loading="lazy" />
          <span>RunCommerce</span>
        </Link>
        <p className="mt-4 text-sm text-muted-foreground max-w-sm">
          Scalable B2B ecommerce platforms, enterprise integrations, and managed hosting for ambitious brands.
        </p>
        <div className="mt-6 flex gap-4 text-muted-foreground">
          <a href="#" aria-label="Twitter" className="hover:text-foreground"><Twitter className="h-5 w-5" /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-foreground"><Linkedin className="h-5 w-5" /></a>
          <a href="#" aria-label="GitHub" className="hover:text-foreground"><Github className="h-5 w-5" /></a>
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-4 text-sm">Services</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/ecommerce" className="hover:text-foreground">E-commerce Development</Link></li>
          <li><Link to="/b2b" className="hover:text-foreground">B2B Enterprise</Link></li>
          <li><Link to="/hosting" className="hover:text-foreground">Hosting</Link></li>
          <li><Link to="/datalink" className="hover:text-foreground">Datalink</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4 text-sm">Company</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          <li><a href="#" className="hover:text-foreground">Privacy</a></li>
          <li><a href="#" className="hover:text-foreground">Terms</a></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border">
      <div className="container py-6 text-xs text-muted-foreground flex justify-between">
        <span>© {new Date().getFullYear()} RunCommerce. All rights reserved.</span>
        <span>Crafted with care.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
