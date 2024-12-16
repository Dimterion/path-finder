import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-work-sans">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
