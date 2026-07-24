import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function About() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <p className="text-base uppercase tracking-[0.2em] text-[color:var(--muted)]">
          Why Work With Me
        </p>

        <Heading as="h2" size="lg" className="mt-4">
          Content that turns attention into revenue.
        </Heading>

        <p className="mt-6 text-xl leading-8 text-[color:var(--muted)]">
          I help businesses grow through strategic content, engaging visuals, and consistent social media management designed to attract the right audience and convert them into loyal customers.
        </p>
      </Container>
    </Section>
  );
}