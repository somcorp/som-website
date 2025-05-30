import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Image src="/logo-som.png" alt="Logo da Empresa - SOM" width={483} height={142} />
    </main>
  );
}
