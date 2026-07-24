import Link from "next/link";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-white/80 backdrop-blur">
      <Container>
        <Section size="sm">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight"
            >
              Jill Anne Basit
            </Link>

            <nav className="flex items-center gap-8 text-sm font-medium">
              <Link
                href="/"
                className="transition hover:text-neutral-500"
              >
                Home
              </Link>

              <Link
                href="/work"
                className="transition hover:text-neutral-500"
              >
                Case Studies
              </Link>

              <Link
                href="/#contact"
                className="transition hover:text-neutral-500"
              >
                Contact
              </Link>
            </nav>
          </div>
        </Section>
      </Container>
    </header>
  );
}