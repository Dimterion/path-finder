import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";

export default async function Navbar() {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={144} height={30} />
        </Link>
        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/path/create">
                <span className="max-sm:hidden">Create</span>
              </Link>
              <form>
                <button type="submit">
                  <span className="max-sm:hidden">Logout</span>
                </button>
              </form>
              <Link href="/">Username</Link>
            </>
          ) : (
            <form>
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
}
