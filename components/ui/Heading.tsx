import { ReactNode } from "react";

function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}

type HeadingLevel = "h1" | "h2" | "h3";
type HeadingSize = "xl" | "lg" | "md";

const sizes = {
  xl: "text-5xl md:text-7xl tracking-[-0.06em] leading-none",
  lg: "text-4xl md:text-6xl tracking-[-0.05em] leading-none",
  md: "text-3xl md:text-4xl tracking-[-0.04em] leading-tight",
};

type HeadingProps = {
  children: ReactNode;
  as?: HeadingLevel;
  size?: HeadingSize;
  className?: string;
};

export default function Heading({
  children,
  as = "h2",
  size = "lg",
  className,
}: HeadingProps) {
  const Component = as;

  return (
    <Component
      className={cn(
        "display-font font-normal text-[#171717]",
        sizes[size],
        className
      )}
    >
      {children}
    </Component>
  );
}