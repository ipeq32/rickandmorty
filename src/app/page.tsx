import FilterComponent from "@/components/filter";
import CharactersComponent from "@/components/characters";

export default async function Home() {
  return (
    <main className="flex min-h-dvh max-w-screen-xl mx-auto flex-col items-center justify-between p-24">
      <div className="flex items-center justify-between gap-5 w-full mb-10">
        <h1 className="text-4xl font-bold">Rick and Morty</h1>
        <FilterComponent />
      </div>
      <CharactersComponent />
    </main>
  );
}
