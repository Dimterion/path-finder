import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Header />
      <section className="flex flex-col items-center gap-4">
        <p className="text-2xl font-bold">404</p>
        <h1 className="text-4xl">Page not found</h1>
        <p className="text-xl">Please check the link and try again.</p>
        <section className="flex flex-row flex-wrap gap-4 text-lg">
          <Link href="/" className="underline">
            Home page
          </Link>
          <a href="#" className="underline">
            Contact
          </a>
        </section>
      </section>
      <Footer />
    </main>
  );
}
