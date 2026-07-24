import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  number: string;
  title: string;
  description: string;
  image: string;
  href: string;
};

export default function ProjectCard({
  number,
  title,
  description,
  image,
  href,
}: ProjectCardProps) {
  return (
    <article className="group">
      <Link href={href}>
        <div className="overflow-hidden rounded-3xl border border-[color:var(--border)]">
          <div className="flex aspect-[16/10] items-center justify-center bg-[color:var(--surface)]">
  <span className="text-[color:var(--muted)]">
    {title}
  </span>
</div>
        </div>

        <div className="mt-6">
          <p className="font-mono text-sm text-[color:var(--muted)]">
            {number}
          </p>

          <h3 className="mt-2 text-2xl font-semibold">
            {title}
          </h3>

          <p className="mt-3 max-w-md leading-7 text-[color:var(--muted)]">
            {description}
          </p>

          <span className="mt-6 inline-flex font-medium">
            View Project →
          </span>
        </div>
      </Link>
    </article>
  );
}