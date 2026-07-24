import Link from "next/link";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

type NextProjectProps = {
  title: string;
  description: string;
  href: string;
  buttonText?: string;
};

export default function NextProject({
  title,
  description,
  href,
  buttonText,
}: NextProjectProps) {
  return (
    <Section size="lg">
      <Container>
        <div className="rounded-[2rem] border border-neutral-200 p-10 md:p-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
            Continue Exploring
          </p>

          <Heading
            as="h2"
            size="lg"
            className="mt-6"
          >
            {title}
          </Heading>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-300">
            {description}
          </p>

          <Link
  href={href}
  className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#171717] px-10 py-5 text-xl font-semibold !text-white transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl"
>
  <span className="!text-white">
    {buttonText ?? "NEXT"}
  </span>

  <span
    aria-hidden
    className="!text-white transition-transform duration-300 group-hover:translate-x-1"
  >
    →
  </span>
</Link>
        </div>
      </Container>
    </Section>
  );
}