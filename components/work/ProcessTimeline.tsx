import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

type TimelineStep = {
  title: string;
  description: string;
};

type ProcessTimelineProps = {
  steps: TimelineStep[];
};

export default function ProcessTimeline({
  steps,
}: ProcessTimelineProps) {
  return (
    <Section size="lg">
      <Container>
        <SectionHeader
          label="Process"
          title="From Strategy to Execution"
          description="A structured workflow that ensured every piece of content aligned with the brand's goals and audience."
        />

        <div className="mt-16">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative flex gap-8 pb-12 last:pb-0"
            >
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 bg-white text-sm font-medium">
                  {index + 1}
                </div>

                {index !== steps.length - 1 && (
                  <div className="mt-4 h-full w-px bg-neutral-200" />
                )}
              </div>

              <div className="flex-1 pb-8">
                <h3 className="text-2xl font-medium text-neutral-900 dark:text-neutral-100">
                  {step.title}
                </h3>

                <p className="mt-4 leading-8 text-neutral-600 dark:text-neutral-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}