import Link from "next/link";

import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-[color:var(--border)] py-24"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[color:var(--muted)]">
            Let's Connect
          </p>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
            Let's Create Your
            <br />
            Next Success Story.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
            Whether you're looking for a social media manager, content creator,
            or graphic designer, I'd love to hear about your business and help
            bring your ideas to life.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {/* WhatsApp */}
            <Link
              href="https://wa.me/639700266597"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[color:var(--border)] px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-[color:var(--surface)]"
            >
              💬
              <span>WhatsApp/Viber</span>
            </Link>

            {/* Email */}
            <Link
              href="mailto:basitjillanne00@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[color:var(--border)] px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-[color:var(--surface)]"
            >
              ✉️
              <span>Email</span>
            </Link>

            {/* Resume */}
            <Link
              href="/resume/Jill-Anne-Basit-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[color:var(--border)] px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-[color:var(--surface)]"
            >
              📄
              <span>Resume</span>
            </Link>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-[color:var(--border)] pt-8 text-center text-sm text-[color:var(--muted)] md:flex-row">
          <p>
            © {new Date().getFullYear()} Jill Anne Basit. All rights reserved.
          </p>

          <p>Social Media Manager • Content Creator • Graphic Designer</p>
        </div>
      </Container>
    </footer>
  );
}