"use client";

import { JSX, useState } from "react";
import Image from "next/image";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "../ui/FadeIn";

type FeaturedCampaignProps = {
  title: string;

  media: {
    type: "image" | "video";
    src: string;
    poster?: string;
  };

  assets?: {
    title: string;
    images: string[];
  }[];

  aspectRatio?: "portrait" | "landscape";

  objective: string;
  audience: string;
  deliverables: string[];
  role: string;
  outcome: string;
};

export default function FeaturedCampaign({
  title,
  media,
  assets = [],
  aspectRatio = "portrait",
  objective,
  audience,
  deliverables,
  role,
  outcome,
}: FeaturedCampaignProps): JSX.Element {
  const [selectedAsset, setSelectedAsset] = useState<number | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const selectedImage =
    selectedAsset !== null
      ? assets[selectedAsset]?.images[currentImage]
      : null;

  if (!media) {
    return (
      <Section size="lg">
        <Container>
          <p className="text-lg font-semibold text-red-500">
            Error: media is undefined
          </p>
        </Container>
      </Section>
    );
  }

  return (
    <Section size="lg">
      <Container>
        <FadeIn>
          <SectionHeader
            label="Featured Campaign"
            title={title}
            description="An educational content campaign designed to provide practical value for students while reinforcing the brand's expertise and credibility."
          />

          <div className="mt-16 grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:items-start">
            <div
              className={`relative mx-auto w-full overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 shadow-sm ${
                aspectRatio === "landscape"
                  ? "max-w-4xl aspect-[16/12]"
                  : "max-w-md aspect-[4/7]"
              }`}
            >
              {media.type === "image" ? (
                <Image
                  src={media.src}
                  alt={title}
                  fill
                  priority
                  className="object-cover"
                />
              ) : (
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  poster={media.poster}
                >
                  <source src={media.src} type="video/mp4" />
                </video>
              )}
            </div>

            <div className="space-y-10">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                  Objective
                </p>

                <p className="mt-3 leading-8 text-neutral-700 dark:text-neutral-300">
                  {objective}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                  Target Audience
                </p>

                <p className="mt-3 leading-8 text-neutral-700 dark:text-neutral-300">
                  {audience}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                  Deliverables
                </p>

                <ul className="mt-4 space-y-3">
                  {deliverables.map((item) => (
                    <li
                      key={item}
                      className="text-neutral-700 dark:text-neutral-300"
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                  My Role
                </p>

                <p className="mt-3 leading-8 text-neutral-700 dark:text-neutral-300">
                  {role}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                  Outcome
                </p>

                <p className="mt-3 leading-8 text-neutral-700 dark:text-neutral-300">
                  {outcome}
                </p>
              </div>
            </div>
          </div>

          <div className="my-16 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
          {assets.length > 0 && (
  <>
    <div className="mt-12">
      <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
        Behind the Campaign
      </p>

      <p className="mb-8 max-w-2xl text-neutral-600 dark:text-neutral-400">
        Explore the creative assets, copywriting, planning, and supporting
        materials that brought this campaign to life.
      </p>

   <div className="grid gap-5 sm:grid-cols-2">
  {assets.map((asset, idx) => {
    const images = asset.images ?? [];

    if (images.length === 0) {
      return (
        <div
          key={asset.title}
          className="rounded-2xl border border-red-200 bg-red-50 p-6"
        >
          <p className="font-semibold text-red-600">
            {asset.title}
          </p>

          <p className="mt-2 text-sm text-red-500">
            No images found.
          </p>
        </div>
      );
    }

    return (
      <button
        key={asset.title}
        type="button"
        onClick={() => {
          setSelectedAsset(idx);
          setCurrentImage(0);
        }}
        className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        <div className="relative aspect-[6/3] overflow-hidden">
          <Image
            src={images[0]}
            alt={asset.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
            {asset.title}
          </h3>

          <p className="mt-1 text-sm text-neutral-500">
            {images.length} image{images.length > 1 ? "s" : ""}
          </p>
        </div>
      </button>
    );
  })}
</div>
</div>
    {selectedAsset !== null && selectedImage && (
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-6"
        onClick={() => setSelectedAsset(null)}
      >
        <div
          className="relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setSelectedAsset(null)}
            className="absolute -top-14 right-0 text-5xl font-light text-white hover:opacity-70"
          >
            ×
          </button>

          {currentImage > 0 && (
            <button
              onClick={() => setCurrentImage((prev) => prev - 1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-4 py-2 text-3xl text-white"
            >
              ‹
            </button>
          )}

          <Image
            src={selectedImage}
            alt={assets[selectedAsset].title}
            width={1800}
            height={1800}
            className="max-h-[90vh] w-auto rounded-2xl object-contain"
          />

          {currentImage < assets[selectedAsset].images.length - 1 && (
            <button
              onClick={() => setCurrentImage((prev) => prev + 1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-4 py-2 text-3xl text-white"
            >
              ›
            </button>
          )}

          <div className="mt-4 text-center text-white">
            <h3 className="text-lg font-semibold">
              {assets[selectedAsset].title}
            </h3>

            <p className="text-sm text-white/70">
              {currentImage + 1} / {assets[selectedAsset].images.length}
            </p>
          </div>
        </div>
      </div>
    )}
  </>
)}

      </FadeIn>
    </Container>
  </Section>
);
}