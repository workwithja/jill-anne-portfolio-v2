import { ReactNode } from "react";

// Lightweight local classnames helper to avoid importing a non-module lib/cn
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type SectionSize = "sm" | "md" | "lg";

const spacing = {
  sm: "py-10",
  md: "py-14",
  lg: "py-18",
};

type SectionProps = {
  children: ReactNode;
  className?: string;
  size?: SectionSize;
  id?: string;
};

export default function Section({
  children,
  className,
  size = "md",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(spacing[size], className)}
    >
      {children}
    </section>
  );
}