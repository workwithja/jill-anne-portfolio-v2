import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

type SkillCategory = {
  title: string;
  skills: string[];
};

type SkillsProps = {
  categories: SkillCategory[];
};

export default function Skills({
  categories,
}: SkillsProps) {
  return (
    <Section size="lg">
      <Container>
        <SectionHeader
          label="Skills & Expertise"
          title="Core Skills Applied"
          description="The strategic, creative, and technical skills used throughout the project."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {categories.map((category) => (
            <article
              key={category.title}
              className="rounded-3xl border border-neutral-200 p-8"
            >
              <h3 className="text-2xl font-medium text-neutral-900 dark:text-neutral-100">
                {category.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}