export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-4 flex flex-row flex-wrap p-4">
      <p>&copy; {currentYear} Path Finder. Made by</p>
      <a
        href="https://github.com/Dimterion"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-1 underline transition-colors hover:text-gray-600"
      >
        Dimterion
      </a>
      .
    </footer>
  );
}
