import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col px-8 py-4 h-screen w-full ">
      <div className="absolute inset-0 bg-spider-pattern bg-cover bg-center opacity-20 brightness-50 contrast-50"></div>
      <main className="flex flex-col relative z-10">
        <Navbar />

      </main>
      
    </div>  
  );
}
