import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ComingSoon from "./pages/ComingSoon";

// Full site pages — restored when ready to launch
// import Layout from "./components/Layout";
// import Home from "./pages/Home";
// import Platform from "./pages/Platform";
// import Automation from "./pages/Automation";
// import Services from "./pages/Services";
// import LinkCommerce from "./pages/LinkCommerce";
// import HostCommerce from "./pages/HostCommerce";
// import About from "./pages/About";
// import Partners from "./pages/Partners";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
