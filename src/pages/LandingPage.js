import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/services/ServicesSection";
import AboutSection from "../components/AboutSection";
import TeamSection from "../components/team/TeamSection";
import NewsletterSection from "../components/NewsletterSection";
import ContactSection from "../components/contactSection/ContactSection";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TeamSection />
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default LandingPage;
