import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function Navbar() {
  const session = await auth();

  return (
    <header className="bg-white px-5 py-3 font-work-sans shadow-sm">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image
            className="h-auto w-auto"
            src="/logo.png"
            alt="Logo"
            width={100}
            height={30}
          />
        </Link>
        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/path/create">
                <span className="max-sm:hidden">Create</span>
                <BadgePlus className="size-6 sm:hidden" />
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">
                  <span className="max-sm:hidden">Sign out</span>
                  <LogOut className="size-6 text-red-500 sm:hidden" />
                </button>
              </form>
              <Link href={`/user/${session?.id}`}>
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
        </div>
      </nav>
    </header>
  );
}
