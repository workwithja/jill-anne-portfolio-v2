"use client";
import { useState, type JSX } from "react";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";


type WorkItem = {
  images: (ImageProps["src"] | string)[];
  title: string;
  category: string;
  href: string;
};

type SelectedWorksProps = {
  works: WorkItem[];
  showButton?: boolean;
};

export default function SelectedWorks({
  works,
  showButton = true,
}: SelectedWorksProps): JSX.Element {

  const [selectedWork, setSelectedWork] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <Section size="lg">
      <Container>
        <SectionHeader
          label=""
          title="Selected Projects"
          description="A collection of educational, promotional, and community-focused content created to engage students and strengthen the brand's online presence."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {works.map((work, index) => {
            const preview = work.images[0];
            console.log(work.images[0]);

            const isVideo =
              typeof preview === "string" &&
              (preview.endsWith(".mp4") ||
                preview.endsWith(".webm") ||
                preview.endsWith(".mov"));

            const videoSrc =
              typeof preview === "string"
                ? preview
                : undefined;

            return (
  <article key={work.title} className="group">
    <div
      onClick={() => {
        setSelectedWork(index);
        setSelectedImage(0);
      }}
      className="relative aspect-[4/5] cursor-pointer overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl"
    >
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
        </video>
      ) : (
        <Image
          src={preview}
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
        <Link
          href={work.href}
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-900 transition-all duration-300 hover:bg-black hover:text-white"
        >
          CLICK TO EXPLORE
          <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  </article>
);
          })}
        </div>
        {selectedWork !== null && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6">
    <button
      onClick={() => setSelectedWork(null)}
      className="absolute right-6 top-6 text-4xl text-white hover:opacity-70"
    >
      ×
    </button>

    <button
      onClick={() =>
        setSelectedImage((prev) =>
          prev === 0
            ? works[selectedWork].images.length - 1
            : prev - 1
        )
      }
      className="absolute left-6 text-5xl text-white hover:opacity-70"
    >
      ‹
    </button>

    <div className="relative h-[85vh] w-full max-w-6xl">
      {typeof works[selectedWork].images[selectedImage] === "string" &&
      (
        works[selectedWork].images[selectedImage] as string
      ).match(/\.(mp4|webm|mov)$/i) ? (
        <video
          src={works[selectedWork].images[selectedImage] as string}
          controls
          autoPlay
          className="h-full w-full object-contain"
        />
      ) : (
        <Image
          src={works[selectedWork].images[selectedImage]}
          alt={works[selectedWork].title}
          fill
          className="object-contain"
        />
      )}

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-sm text-white">
        {selectedImage + 1} / {works[selectedWork].images.length}
      </div>
    </div>

    <button
      onClick={() =>
        setSelectedImage((prev) =>
          prev === works[selectedWork].images.length - 1
            ? 0
            : prev + 1
        )
      }
      className="absolute right-6 text-5xl text-white hover:opacity-70"
    >
      ›
    </button>
  </div>
)}
      </Container>
    </Section>
  );
}