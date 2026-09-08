import Seo from "@/components/Seo";
import Hero from "@/components/home/Hero";
import IntroSection from "@/components/home/IntroSection";
import DailyGuideSection from "@/components/home/DailyGuideSection";
import FeaturedMessageSection from "@/components/home/FeaturedMessageSection";
import FreedomNationSection from "@/components/home/FreedomNationSection";
import CreativeWorkSection from "@/components/home/CreativeWorkSection";
import ContactCtaSection from "@/components/home/ContactCtaSection";

export default function HomePage() {
  return (
    <>
      <Seo
        title="Home"
        description="The Fela ishola. Faith, creativity, purpose, and ideas, through the life and work of Fela Ishola, Lead Minister of Freedom Nation and Brand Designer at Fegitals Digitals."
        path="/"
      />
      <Hero />
      <IntroSection />
      <DailyGuideSection />
      <FeaturedMessageSection />
      <FreedomNationSection />
      <CreativeWorkSection />
      <ContactCtaSection />
    </>
  );
}
