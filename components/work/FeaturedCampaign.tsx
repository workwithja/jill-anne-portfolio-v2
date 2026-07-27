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
    <div className="bg-red-500 p-10 text-white text-3xl">
      FEATURED CAMPAIGN TEST
    </div>
  </Container>
</Section>
);
}