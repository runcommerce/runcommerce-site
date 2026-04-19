import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ComingSoon from "./pages/ComingSoon";
import PreviewGate from "./pages/PreviewGate";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Platform from "./pages/Platform";
import Automation from "./pages/Automation";
import Services from "./pages/Services";
import LinkCommerce from "./pages/LinkCommerce";
import HostCommerce from "./pages/HostCommerce";
import About from "./pages/About";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [unlocked, setUnlocked] = useState(
    () => typeof window !== "undefined" && sessionStorage.getItem("preview-unlocked") === "true"
  );

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/preview" element={<PreviewGate onUnlock={() => setUnlocked(true)} />} />

            {unlocked ? (
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/platform" element={<Platform />} />
                <Route path="/automation" element={<Automation />} />
                <Route path="/services" element={<Services />} />
                <Route path="/linkcommerce" element={<LinkCommerce />} />
                <Route path="/hostcommerce" element={<HostCommerce />} />
                <Route path="/about" element={<About />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/contact" element={<Contact />} />
                {/* Legacy redirects */}
                <Route path="/ecommerce" element={<Platform />} />
                <Route path="/b2b" element={<Automation />} />
                <Route path="/hosting" element={<Services />} />
                <Route path="/datalink" element={<LinkCommerce />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            ) : (
              <Route path="*" element={<ComingSoon />} />
            )}
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
