import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <p>404</p>
      <h1>Page not found</h1>
      <p>Please check the link and try again.</p>
      <section>
        <Link href="/">Home page</Link>
        <a href="#">
          Contact <span aria-hidden="true">&rarr;</span>
        </a>
      </section>
    </main>
  );
}
