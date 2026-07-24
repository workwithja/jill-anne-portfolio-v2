import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

type ChallengeProps = {
  introduction: string;
  challenges: {
    category: string;
    description: string;
  }[];
};

export default function Challenge({
  introduction,
  challenges,
}: ChallengeProps) {
  return (
    <Section size="lg">
      <Container>
        <SectionHeader
          label="The Challenge"
          title="Project Challenges"
          description="Building a consistent and trustworthy social media presence required more than attractive visuals—it demanded a clear strategy, organized workflows, and content that genuinely served students."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-lg leading-9 text-neutral-700 dark:text-neutral-300">
              {introduction}
            </p>
          </div>

          <div className="space-y-6">
            {challenges.map((challenge) => (
              <div
                key={challenge.category}
                className="rounded-2xl border border-neutral-200 p-6"
              >
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                  {challenge.category}
                </p>

                <p className="mt-4 leading-8 text-neutral-700 dark:text-neutral-300">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}