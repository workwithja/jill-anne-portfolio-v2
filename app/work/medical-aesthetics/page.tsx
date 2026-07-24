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

import medicalAesthetics from "@/data/case-studies/medical-aesthetics";

export default function MedicalAestheticsPage() {
  console.log("medicalAesthetics:", medicalAesthetics);
  console.log("featuredCampaign:", medicalAesthetics.featuredCampaign);

  return (
    <>
      <Navigation />

      <main>
        <Hero {...medicalAesthetics.hero} />

        <Snapshot items={medicalAesthetics.snapshot} />

        <FeaturedCampaign
          {...(medicalAesthetics.featuredCampaign as any)}
          aspectRatio="portrait"
        />

        <SelectedWorks
          works={medicalAesthetics.selectedWorks.map((work: any) => ({
            ...work,
            href: work.href ?? "#",
          }))}
        />

        <Challenge {...medicalAesthetics.challenge} />

        <Strategy
          strategies={medicalAesthetics.strategy.strategies}
        />

        <ProcessTimeline
          steps={medicalAesthetics.process.steps}
        />

        <Skills
          categories={
            (medicalAesthetics as any).skills?.categories ??
            (medicalAesthetics as any).skills ??
            []
          }
        />

        {"nextProject" in medicalAesthetics &&
        medicalAesthetics.nextProject ? (
          <NextProject {...(medicalAesthetics as any).nextProject} />
        ) : null}
      </main>
    </>
  );
}