import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter } from "lucide-react";
import logoWordmark from "@/assets/logo-wordmark.svg";

const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="container py-16 grid gap-12 md:grid-cols-4">
      <div className="md:col-span-2">
        <Link to="/" className="flex items-center" aria-label="RunCommerce home">
          <img src={logoWordmark} alt="RunCommerce" className="h-8 w-auto" loading="lazy" />
        </Link>
        <p className="mt-4 text-sm text-muted-foreground max-w-sm">
          The AI operating system for eCommerce. Making eCommerce profitable with AI.
        </p>
        <div className="mt-6 flex gap-4 text-muted-foreground">
          <a href="#" aria-label="Twitter" className="hover:text-foreground"><Twitter className="h-5 w-5" /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-foreground"><Linkedin className="h-5 w-5" /></a>
          <a href="#" aria-label="GitHub" className="hover:text-foreground"><Github className="h-5 w-5" /></a>
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-4 text-sm">What we do</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/platform" className="hover:text-foreground">RunCommerce Platform</Link></li>
          <li><Link to="/automation" className="hover:text-foreground">AI Automation Layer</Link></li>
          <li><Link to="/services" className="hover:text-foreground">AI Managed Services</Link></li>
          <li><Link to="/linkcommerce" className="hover:text-foreground">LinkCommerce</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4 text-sm">Company</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/about" className="hover:text-foreground">About & Team</Link></li>
          <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          <li><a href="#" className="hover:text-foreground">Privacy</a></li>
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
