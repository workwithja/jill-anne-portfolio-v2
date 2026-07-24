import Heading from "./Heading";

type SectionHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const alignment =
    align === "center"
      ? "mx-auto max-w-3xl text-center"
      : "max-w-3xl";

  return (
    <header className={`${alignment} ${className}`}>
      {label && (
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
          {label}
        </p>
      )}

      <Heading as="h2" size="lg">
        {title}
      </Heading>

      {description && (
        <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      )}
    </header>
  );
}