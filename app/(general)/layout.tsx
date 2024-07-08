import { Navbar } from "@/components";
import { log } from "console";

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Ivan Junoy</span>
        { children }
      </main>
    </>

  );
}