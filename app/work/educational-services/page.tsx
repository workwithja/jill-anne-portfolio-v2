import NextProject from "@/components/work/NextProject";
import Skills from "@/components/work/Skills";
import ProcessTimeline from "@/components/work/ProcessTimeline";
import Strategy from "@/components/work/Strategy";
import Challenge from "@/components/work/Challenge";
import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/work/Hero";
import Snapshot from "@/components/work/Snapshot";
import FeaturedCampaign from "@/components/work/FeaturedCampaign";
import SelectedWorks from "@/components/work/SelectedWorks";

import educationalServices from "@/data/case-studies/educational-services";

export default function EducationalServicesPage() {
  // removed undefined reference to `assets`
  return (
    <>
      <Navigation />

      <main>
        <Hero {...educationalServices.hero} />

        <Snapshot
          items={educationalServices.snapshot}
        />

        <FeaturedCampaign
          {...(educationalServices.featuredCampaign as any)}
          aspectRatio="portrait"
        />

        <SelectedWorks
  works={educationalServices.selectedWorks}
  showButton={false}
/>
  
        <Challenge
          introduction=""
          challenges={educationalServices.challenges}
        />

        <Strategy
          strategies={educationalServices.strategy.strategies}
        />

        <ProcessTimeline
          steps={educationalServices.process.steps}
        />

        <Skills
          categories={(educationalServices as any).skills?.categories ?? (educationalServices as any).skills ?? []}
        />

        {"nextProject" in educationalServices && educationalServices.nextProject ? (
          <NextProject {...(educationalServices as any).nextProject} />
        ) : null}
      </main>
    </>
  );
}