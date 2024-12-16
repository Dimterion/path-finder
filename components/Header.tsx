import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function Header() {
  const session = await auth();

  return (
    <header className="bg-white px-5 py-3 font-work-sans shadow-sm">
      <nav className="flex items-center justify-between">
        <Link href="/" aria-label="Home page link">
          <Image
            className="h-auto w-auto"
            src="/logo.png"
            alt="Logo"
            width={100}
            height={30}
          />
        </Link>
        <section className="flex items-center gap-2 text-black sm:gap-5">
          {session && session?.user ? (
            <>
              <Link href="/path/create" aria-label="Create path link">
                <span className="max-sm:hidden">Create</span>
                <BadgePlus className="size-6 sm:hidden" />
              </Link>
              <form
                className="flex"
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit" aria-label="Sign out">
                  <span className="max-sm:hidden">Sign out</span>
                  <LogOut className="size-6 text-red-500 sm:hidden" />
                </button>
              </form>
              <Link
                href={`/user/${session?.id}`}
                aria-label="User profile link"
              >
                <Avatar className="size-10">
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                  />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit">Login</button>
            </form>
          )}
        </section>
      </nav>
    </header>
  );
}
