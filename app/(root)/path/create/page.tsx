import { redirect } from "next/navigation";
import { auth } from "@/auth";
import PathForm from "@/components/PathForm";

export default async function Create() {
  const session = await auth();

  if (!session) redirect("/");

  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <h1 className="heading">Create your path</h1>
      </section>
      <PathForm />
    </>
  );
}
