import Hero from "@/components/work/Hero";
import Snapshot from "@/components/work/Snapshot";
import FeaturedCampaign from "@/components/work/FeaturedCampaign";
import SelectedWorks from "@/components/work/SelectedWorks";
import Challenge from "@/components/work/Challenge";
import Strategy from "@/components/work/Strategy";
import ProcessTimeline from "@/components/work/ProcessTimeline";
import Skills from "@/components/work/Skills";
import NextProject from "@/components/work/NextProject";

import basketballContents from "@/data/case-studies/basketball-contents";

export default function BasketballContentPage() {
  const featuredCampaign = {
    ...basketballContents.featuredCampaign,
    media: {
      ...basketballContents.featuredCampaign.media,
      type: basketballContents.featuredCampaign.media.type as "image" | "video",
    },
  };

  return (
    <>
      <Hero {...basketballContents.hero} />

      <Snapshot items={basketballContents.snapshot} />

      <FeaturedCampaign
        {...featuredCampaign}
        aspectRatio="landscape"
      />

      <SelectedWorks
  works={basketballContents.selectedWorks.map((work) => ({
    ...work,
    href: "#",
  }))}
  showButton={false}
/>

      <Challenge introduction={""} challenges={[]} {...basketballContents.challenge} />

      <Strategy
        strategies={basketballContents.strategy.strategies}
      />

      <ProcessTimeline
        steps={basketballContents.process.steps}
      />

      <Skills
        categories={basketballContents.skills.categories}
      />

      <NextProject {...basketballContents.nextProject} />
    </>
  );
}