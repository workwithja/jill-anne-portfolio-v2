import Image from "next/image";
import Link from "next/link";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Grid from "@/components/ui/Grid";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

type HeroProps = {
  category: string;
  title: string;
  description: string;
  coverImage: string;
  showButton?: boolean;
};

export default function Hero({
  category,
  title,
  description,
  coverImage,
  showButton = true,
}: HeroProps) {
  return (
    <Section size="lg">
      <Container>
        <Grid>
          {/* Left Content */}
          <div className="col-span-12 lg:col-span-7">
            <Badge>{category}</Badge>

            <div className="mt-8">
              <Heading as="h1" size="xl">
                {title}
              </Heading>
            </div>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[color:var(--muted)]">
              {description}
            </p>

            {showButton && (
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href="/work">
                  View Case Studies
                </Button>

              </div>
            )}
          </div>

          {/* Right Image */}
          <div className="col-span-12 lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-lg">
              <Image
                src={coverImage}
                alt={title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </Grid>
      </Container>
    </Section>
  );
}