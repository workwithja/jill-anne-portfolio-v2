import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}

export default function Button({
  href,
  children,
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-3 rounded-full bg-black px-10 py-5 text-xl font-semibold !text-white no-underline transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl",
        className
      )}
    >
      {children}

      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}