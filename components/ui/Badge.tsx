import { ReactNode } from "react";

// Local classnames helper to avoid importing a non-module file
function cn(...inputs: Array<string | false | null | undefined>) {
  return inputs.filter(Boolean).join(" ");
}

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export default function Badge({
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-black/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-black/70",
        className
      )}
    >
      {children}
    </span>
  );
}