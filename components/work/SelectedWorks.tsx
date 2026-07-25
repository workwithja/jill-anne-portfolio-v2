"use client";

import { useState, type JSX } from "react";
import Image, { type ImageProps } from "next/image";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

type WorkItem = {
  images: (ImageProps["src"] | string)[];
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
}: SelectedWorksProps): JSX.Element {
  const [selectedWork, setSelectedWork] = useState<number | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const selectedImage =
    selectedWork !== null
      ? works[selectedWork]?.images[currentImage]
      : null;

  return (
    <Section size="lg">
      <Container>
        <SectionHeader
          label="Case Studies"
          title="Selected Projects"
          description="A collection of educational, promotional, and community-focused content created to engage students and strengthen the brand's online presence."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {works.map((work, index) => {
            const preview = work.images[0];

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
              <article
                key={work.title}
                className="group cursor-pointer"
                onClick={() => {
                  setSelectedWork(index);
                  setCurrentImage(0);
                }}
              >
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
                      {videoSrc && (
                        <source
                          src={videoSrc}
                          type="video/mp4"
                        />
                      )}

                      Your browser does not support the
                      video tag.
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

                  <p className="mt-2 text-sm text-neutral-500">
                    {work.images.length} image
                    {work.images.length > 1
                      ? "s"
                      : ""}
                  </p>

                  {showButton && (
                    <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-900 transition-all duration-300 group-hover:bg-black group-hover:text-white">
                      VIEW GALLERY
                      <span aria-hidden="true">
                        →
                      </span>
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
                {selectedWork !== null && selectedImage && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-6"
            onClick={() => setSelectedWork(null)}
          >
            <div
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedWork(null)}
                className="absolute -top-14 right-0 text-5xl font-light text-white transition hover:opacity-70"
              >
                ×
              </button>

              {currentImage > 0 && (
                <button
                  type="button"
                  onClick={() =>
                    setCurrentImage((prev) => prev - 1)
                  }
                  className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 px-4 py-2 text-3xl text-white transition hover:bg-black/60"
                >
                  ‹
                </button>
              )}

              <Image
                src={selectedImage}
                alt={works[selectedWork].title}
                width={1800}
                height={1800}
                className="max-h-[90vh] w-auto rounded-2xl object-contain"
              />

              {currentImage <
                works[selectedWork].images.length - 1 && (
                <button
                  type="button"
                  onClick={() =>
                    setCurrentImage((prev) => prev + 1)
                  }
                  className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 px-4 py-2 text-3xl text-white transition hover:bg-black/60"
                >
                  ›
                </button>
              )}

              <div className="mt-5 text-center text-white">
                <h3 className="text-xl font-semibold">
                  {works[selectedWork].title}
                </h3>

                <p className="mt-1 text-sm text-white/70">
                  {currentImage + 1} /{" "}
                  {works[selectedWork].images.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}