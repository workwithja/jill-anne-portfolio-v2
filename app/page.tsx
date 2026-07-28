import Navigation from "@/components/layout/Navigation";

import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import ProfessionalDevelopment from "@/components/home/ProfessionalDevelopment";
import CaseStudiesCTA from "@/components/home/CaseStudiesCTA";

export default function HomePage() {
  return (
    <>
      <Navigation />

      <main>
        <Hero
          category="Available for Freelance"
          title="Social Media Manager & Content Creator"
          description=""
          coverImage="/images/jill.png"
        />

        <About />

        <Services />

        <ProfessionalDevelopment />

        <CaseStudiesCTA />
      </main>
    </>
  );
}