import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-7xl font-bold">404</h1>

        <h2 className="mt-4 text-3xl font-semibold">
          Page Not Found
        </h2>

        <p className="mt-4 text-neutral-500">
          The page you're looking for doesn't exist.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex rounded-xl bg-black px-6 py-3 text-white transition hover:bg-neutral-800"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}