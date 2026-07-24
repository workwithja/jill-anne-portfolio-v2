import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const services = [
  "Social Media Strategy",
  "Content Creation",
  "Social Media Management",
  "Brand Positioning",
  "Graphic Design",
  "Carousel Design",
  "Reels & TikTok Editing",
  "Copywriting",
  "Content Calendar",
  "Content Scheduling",
  "Community Management",
  "Marketing Campaigns",
  "Lead Generation",
  "Brand Visual Identity",
  "Analytics & Reporting"
];

export default function Services() {
  return (
    <Section>
      <Container>
        <Heading as="h2" size="lg">
          What I Can Help With
        </Heading>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-2xl border border-[color:var(--border)] p-6"
            >
              <h3 className="font-medium">{service}</h3>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}