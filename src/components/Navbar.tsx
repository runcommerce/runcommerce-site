import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoWordmark from "@/assets/logo-wordmark.svg";

const links = [
  { to: "/ecommerce", label: "E-commerce" },
  { to: "/b2b", label: "B2B Enterprise" },
  { to: "/hosting", label: "Hosting" },
  { to: "/datalink", label: "Datalink" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="RunCommerce home">
          <img src={logoWordmark} alt="RunCommerce" className="h-8 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "text-sm transition-colors hover:text-foreground",
                  isActive ? "text-foreground" : "text-muted-foreground",
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <Link to="/contact">Contact</Link>
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
          <div className="container py-4 flex flex-col gap-4">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-foreground">
                {l.label}
              </NavLink>
            ))}
            <Button asChild size="sm" className="w-full">
              <Link to="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
