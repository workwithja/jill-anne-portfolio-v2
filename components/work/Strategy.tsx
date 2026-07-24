import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

type StrategyItem = {
  title: string;
  description: string;
};

type StrategyProps = {
  strategies: StrategyItem[];
};

export default function Strategy({
  strategies,
}: StrategyProps) {
  return (
    <Section size="lg">
      <Container>
        <FadeIn>
          <SectionHeader
            label="Strategy"
            title="The Approach"
            description="From research to publishing, every step followed a repeatable workflow that ensured consistency, quality, and efficiency."
          />
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {strategies.map((strategy, index) => (
            <FadeIn
              key={strategy.title}
              delay={index * 0.12}
            >
              <article className="group h-full rounded-3xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-neutral-300 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
                <span className="text-sm font-medium tracking-widest text-neutral-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-6 text-2xl font-medium text-neutral-900 dark:text-neutral-100">
                  {strategy.title}
                </h3>

                <p className="mt-4 leading-8 text-neutral-600 dark:text-neutral-400">
                  {strategy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}