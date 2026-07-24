import { ReactNode } from "react";

// Simple local `cn` utility to avoid import/module issues.
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type GridProps = {
  children: ReactNode;
  className?: string;
};

export default function Grid({
  children,
  className,
}: GridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-12 gap-6 lg:gap-10",
        className
      )}
    >
      {children}
    </div>
  );
}