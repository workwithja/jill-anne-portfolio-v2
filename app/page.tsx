import basketballContents from "@/data/case-studies/basketball-contents";
import CaseStudiesCTA from "@/components/home/CaseStudiesCTA";
import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import FeaturedWork from "@/components/home/FeaturedWork";
import Services from "@/components/home/Services";

export default function HomePage() {
  return (
    <>
      <Navigation />

      <main>
        <Hero
  category="Available for Freelance"
  title="Social Media Manager & Content Creator"
  description="Helping businesses grow online through strategy, content creation, and organized social media management that turns ideas into measurable results."
  coverImage="/images/jill.png"
  showButton={false}
/>

        <About />

          <Services />

          <CaseStudiesCTA />

      </main>
    </>
  );
}