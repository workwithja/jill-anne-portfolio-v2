import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import ProjectCard from "@/components/work/ProjectCard";
import { featuredProjects } from "@/data/projects";

// Fallback featured projects data to avoid missing-module errors when
// the external data module isn't available. Keep shape generic to be
// spread into ProjectCard props.


export default function FeaturedWork() {
  return (
    <Section size="lg">
      <Container>
        <div className="max-w-2xl">
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">
            Selected Work
          </p>

          <div className="mt-4">
            <Heading as="h2" size="lg">
              Projects that delivered
              <br />
              measurable results.
            </Heading>
          </div>

          <p className="mt-6 leading-8 text-[color:var(--muted)]">
            A selection of social media projects across education,
            healthcare, and community-focused brands.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}