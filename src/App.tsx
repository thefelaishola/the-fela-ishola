import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SiteLayout from "@/layouts/SiteLayout";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import MinistryPage from "@/pages/MinistryPage";
import DailyGuideListPage from "@/pages/DailyGuideListPage";
import DailyGuideDetailPage from "@/pages/DailyGuideDetailPage";
import MessagesListPage from "@/pages/MessagesListPage";
import MessageDetailPage from "@/pages/MessageDetailPage";
import PortfolioListPage from "@/pages/PortfolioListPage";
import PortfolioDetailPage from "@/pages/PortfolioDetailPage";
import ContactPage from "@/pages/ContactPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import TermsPage from "@/pages/TermsPage";
import NotFoundPage from "@/pages/NotFoundPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <SiteLayout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/ministry" element={<MinistryPage />} />
        <Route path="/daily-guide" element={<DailyGuideListPage />} />
        <Route path="/daily-guide/:slug" element={<DailyGuideDetailPage />} />
        <Route path="/messages" element={<MessagesListPage />} />
        <Route path="/messages/:slug" element={<MessageDetailPage />} />
        <Route path="/portfolio" element={<PortfolioListPage />} />
        <Route path="/portfolio/:slug" element={<PortfolioDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </SiteLayout>
  );
}
