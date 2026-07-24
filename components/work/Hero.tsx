import Image, { type ImageProps } from "next/image";

import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import Heading from "@/components/ui/Heading";

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