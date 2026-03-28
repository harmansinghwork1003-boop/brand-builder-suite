import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
import SocialMediaManagement from "./pages/services/SocialMediaManagement";
import SEOPage from "./pages/services/SEO";
import AppDevelopment from "./pages/services/AppDevelopment";
import SMMPricing from "./pages/services/SMMPricing";
import WebsitePricing from "./pages/services/WebsitePricing";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Chatbot from "./components/Chatbot";
import SocialMediaCampaign from "./pages/portfolio/SocialMediaCampaign";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/services/website-development" element={<WebsiteDevelopment />} />
            <Route path="/services/social-media-management" element={<SocialMediaManagement />} />
            <Route path="/services/seo" element={<SEOPage />} />
            <Route path="/services/app-development" element={<AppDevelopment />} />
            <Route path="/services/social-media-management/pricing" element={<SMMPricing />} />
            <Route path="/services/website-development/pricing" element={<WebsitePricing />} />
            <Route path="/portfolio/social-media-campaign" element={<SocialMediaCampaign />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Chatbot />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
