import { Dots } from "@/components/Dots";
import Image from "next/image";

export default function EmBreve() {
  return (
    <main className="relative flex flex-col md:flex-row  items-center justify-center text-center h-dvh bg-black text-white text-7xl font-semibold uppercase">
      <h1>Em breve</h1>
      <Dots />

      <Image
        className="absolute bottom-10"
        src="/logo-som.png"
        alt="Logo Som Corporation"
        width={140}
        height={41}
        priority
      />
    </main>
  );
}
