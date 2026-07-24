import Image, { type ImageProps } from "next/image";
import Link from "next/link";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import Heading from "@/components/ui/Heading";

function DownloadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

type HeroProps = {
  category: string;
  title: string;
  description: string;
  coverImage: ImageProps["src"];
  metrics?: {
    label: string;
    value: string;
  }[];
};

export default function Hero({
  category,
  title,
  description,
  coverImage,
  metrics = [],
}: HeroProps) {
  return (
    <section className="pb-24 pt-40">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-[1fr_520px]">
          {/* Left */}
          <FadeIn>
            <div>
              <Badge>{category}</Badge>

              <Heading as="h1" size="xl" className="mt-6">
                {title}
              </Heading>

              <p className="mt-8 max-w-2xl text-xl leading-9 text-neutral-600 dark:text-neutral-400">
                {description}
              </p>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href="/work">
                  View Case Studies
                </Button>

              
              </div>

              {metrics.length > 0 && (
                <div className="mt-16 grid grid-cols-2 gap-8 border-t border-neutral-200 pt-10 dark:border-neutral-800 md:grid-cols-4">
                  {metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="text-3xl font-medium text-neutral-900 dark:text-neutral-100">
                        {metric.value}
                      </p>

                      <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </FadeIn>

          {/* Right */}
          <FadeIn delay={0.2}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
              <Image
                src={coverImage}
                alt={title}
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}