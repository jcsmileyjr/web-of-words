import Navbar from "./components/navbar/Navbar";
import Game from "./components/game/Game";
import Answer from "./components/answers/Answer";

export default function Home() {
  return (
    <div className="flex flex-col px-8 py-4 h-screen w-full ">
      <div className="absolute inset-0 bg-spider-pattern bg-cover bg-center opacity-20 brightness-50 contrast-50"></div>
      <main className="flex flex-col gap-8 relative z-10 md:w-1/2 md:mx-auto">
        <Navbar />
        <Game />
        <Answer />
      </main>
      
    </div>  
  );
}
