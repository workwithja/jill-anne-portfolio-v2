import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function CaseStudiesCTA() {
  return (
    <Section size="lg">
      <Container className="max-w-4xl text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">
          Case Studies
        </p>

        <Heading as="h2" size="xl" className="mt-6">
          See the work behind the results.
        </Heading>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
          Explore selected projects and discover how thoughtful design helps
          brands communicate more effectively.
        </p>

        <div className="mt-12">
          <Button href="/work">
            CLICK ME
          </Button>
        </div>
      </Container>
    </Section>
  );
}