import { ReactNode } from "react";

// Local className combiner to avoid import/module resolution issues.
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({
  children,
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl px-6 md:px-10 xl:px-12",
        className
      )}
    >
      {children}
    </div>
  );
}