"use client";

import Image from "next/image";
import { JSX, useEffect, useState } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const certificates = [
  {
    title: "Introduction to Content Creation",
    image: "/images/certifications/intro.png",
    pdf: "/certificates/intro.pdf",
  },
  {
    title: "Creating Concepts for Social Media",
    image: "/images/certifications/create.png",
    pdf: "/certificates/create.pdf",
  },
  {
    title: "Translating Concepts into Multimedia Contents",
    image: "/images/certifications/translating.png",
    pdf: "/certificates/translating.pdf",
  },
  {
    title: "Propagating Content",
    image: "/images/certifications/propagating.png",
    pdf: "/certificates/propagating.pdf",
  },
];

export default function ProfessionalDevelopment(): JSX.Element {
  const [selected, setSelected] = useState<number | null>(null);

  const closeModal = () => setSelected(null);

  const next = () => {
    if (selected === null) return;
    setSelected((selected + 1) % certificates.length);
  };

  const previous = () => {
    if (selected === null) return;
    setSelected(
      (selected - 1 + certificates.length) % certificates.length
    );
  };

  useEffect(() => {
    if (selected !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selected === null) return;

      switch (event.key) {
        case "Escape":
          closeModal();
          break;

        case "ArrowRight":
          next();
          break;

        case "ArrowLeft":
          previous();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected]);

  return (
    <>
      <Section size="lg">
        <Container>
          <SectionHeader
            label="Professional Development"
            title="Committed to Continuous Learning"
            description="I continuously invest in learning to strengthen my expertise in social media management, content creation, and digital marketing. Through the TESDA Online Program, I completed structured training focused on content planning, multimedia production, and content distribution."
          />

          <div className="mt-16 rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
              {/* LEFT */}
              <div className="max-w-2xl">
                <span className="inline-flex rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 dark:border-neutral-700 dark:text-neutral-400">
                  TESDA Online Program
                </span>

                <h3 className="mt-6 text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                  Content Creation (Social Media) Level III
                </h3>

                <p className="mt-3 text-neutral-600 dark:text-neutral-400">
                  Technical Education and Skills Development Authority (TESDA)
                </p>

                <p className="mt-6 leading-8 text-neutral-700 dark:text-neutral-300">
                  Successfully completed a structured learning program covering
                  content planning, social media concepts, multimedia
                  production, and content distribution. This program
                  strengthened my ability to create strategic and engaging
                  content across different digital platforms.
                </p>

                <ul className="mt-8 space-y-4">
                  {[
                    "Introduction to Content Creation",
                    "Creating Concepts for Social Media",
                    "Translating Concepts into Multimedia Contents",
                    "Propagating Content",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900 text-xs font-semibold text-white dark:bg-white dark:text-black">
                        ✓
                      </span>

                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-4">
                  <span className="rounded-full bg-neutral-100 px-4 py-2 text-sm text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                    Completed July 2026
                  </span>

                  <span className="rounded-full bg-neutral-100 px-4 py-2 text-sm text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                    4 Certificates Earned
                  </span>
                </div>
              </div>

              {/* RIGHT */}
              <div className="w-full max-w-[460px]">
                <div className="grid grid-cols-2 gap-4">
                  {certificates.map((certificate, index) => (
                    <button
  key={certificate.title}
  onClick={() => window.open(certificate.pdf, "_blank")}
  className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900"
>
                      <div className="overflow-hidden">
                        <Image
                          src={certificate.image}
                          alt={certificate.title}
                          width={600}
                          height={420}
                          className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="p-4">
                        <p className="text-sm font-medium leading-6 text-neutral-800 dark:text-neutral-200">
                          {certificate.title}
                        </p>

                        <p className="mt-2 text-xs uppercase tracking-[0.15em] text-neutral-500">
                          View in Full →
                        </p>
                      </div>
                    </button>
                  ))}
                </div>

                <p className="mt-5 text-center text-sm text-neutral-500 dark:text-neutral-400">
                  Click any certificate to view it in full size.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FULLSCREEN MODAL STARTS HERE */}
      {selected !== null && (
  <div
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-6 backdrop-blur-sm animate-in fade-in duration-300"
    onClick={closeModal}
  >
    <button
      onClick={closeModal}
      className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/20"
      aria-label="Close"
    >
      ×
    </button>

    <button
      onClick={(e) => {
        e.stopPropagation();
        previous();
      }}
      className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-4 text-3xl text-white transition hover:bg-white/20"
      aria-label="Previous"
    >
      ←
    </button>

    <button
      onClick={(e) => {
        e.stopPropagation();
        next();
      }}
      className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-4 text-3xl text-white transition hover:bg-white/20"
      aria-label="Next"
    >
      →
    </button>

    <div
      onClick={(e) => e.stopPropagation()}
      className="mx-auto flex w-full max-w-6xl flex-col items-center"
    >
      <div className="overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-neutral-900">
        <Image
          src={certificates[selected].image}
          alt={certificates[selected].title}
          width={1400}
          height={1000}
          priority
          className="max-h-[80vh] w-auto object-contain"
        />
      </div>

      <div className="mt-8 text-center">
        <h3 className="text-2xl font-semibold text-white">
          {certificates[selected].title}
        </h3>

        <p className="mt-2 text-neutral-300">
          TESDA Online Program · Content Creation (Social Media) Level III
        </p>

        <p className="mt-6 text-sm uppercase tracking-[0.2em] text-neutral-500">
          {selected + 1} / {certificates.length}
        </p>
      </div>
    </div>
  </div>
)}
    </>
  );
}