import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import WorkflowSection from "@/components/WorkflowSection";
import SoftwareMarquee from "@/components/SoftwareMarquee";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import PageTransition from "@/components/PageTransition";
const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageTransition>

      <Navbar />
      {/* <HeroSection /> */}
      {/* <AboutSection /> */}
      <ServicesSection />
      {/* <SoftwareMarquee /> */}
      {/* <WhyChooseSection /> */}
      {/* <WorkflowSection /> */}
      {/* <TeamSection /> */}
      {/* <FAQSection /> */}
      <FooterSection />
      </PageTransition>
    </div>
  );
};

export default Services;
