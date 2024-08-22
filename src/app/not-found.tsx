import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col justify-center items-center h-[calc(100vh-200px)] p-24">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-2xl font-bold">Page not found</p>
      <Link
        href="/"
        className="text-xl font-bold text-blue-500 hover:underline"
      >
        Go back to home
      </Link>
    </main>
  );
}
