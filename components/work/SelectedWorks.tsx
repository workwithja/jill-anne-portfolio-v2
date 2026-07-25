import Image, { type ImageProps } from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

type WorkItem = {
  image: ImageProps["src"] | string;
  title: string;
  category: string;
  href?: string;
};

type SelectedWorksProps = {
  works: WorkItem[];
  showButton?: boolean;
};

export default function SelectedWorks({
  works,
  showButton = true,
}: SelectedWorksProps) {
  return (
    <Section size="lg">
      <Container>
        <SectionHeader
          label="Case Studies"
          title="Selected Projects"
          description="A collection of educational, promotional, and community-focused content created to engage students and strengthen the brand's online presence."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => {
            const isVideo =
              typeof work.image === "string" &&
              (work.image.endsWith(".mp4") ||
                work.image.endsWith(".webm") ||
                work.image.endsWith(".mov"));

            const videoSrc: string | undefined =
              typeof work.image === "string" ? work.image : undefined;

            const content = (
              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                  {isVideo ? (
                    <video
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    >
                      {videoSrc && <source src={videoSrc} type="video/mp4" />}
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>

                <div className="mt-5">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                    {work.category}
                  </p>

                  <h3 className="mt-2 text-xl font-medium text-neutral-900 dark:text-neutral-100">
                    {work.title}
                  </h3>

                  {showButton && (
  <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-900 transition-all duration-300 group-hover:bg-black group-hover:text-white">
    CLICK TO EXPLORE
    <span aria-hidden="true">→</span>
  </span>
)}
                </div>
              </article>
            );

            return work.href ? (
              <Link key={work.title} href={work.href} className="block">
                {content}
              </Link>
            ) : (
              <div key={work.title}>{content}</div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}