import React from "react";
import Image from "next/image";

const getCharacter = async (id: string) => {
  const character = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/character/${id}`
  ).then((res) => res.json());

  return character;
};

type Props = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: Props) => {
  const character = await getCharacter(params.id);

  return (
    <div className="flex flex-col  gap-5 h-[calc(100vh-200px)] p-24 max-w-screen-md mx-auto">
      <h1 className="text-4xl font-bold">Name: {character.name}</h1>
      <Image
        src={character.image}
        alt={character.name}
        width={300}
        height={300}
      />
      <div className="flex items-center justify-between w-full gap-5">
        <p className="text-xl font-bold">Species: {character.species}</p>
        <p className="text-xl font-bold">Status: {character.status}</p>
      </div>
      <p className="text-xl font-bold">Location: {character.location.name}</p>
      <p className="text-xl font-bold">Type: {character.type || "Unknown"}</p>
      <ul className="flex flex-col gap-5 h-40 overflow-y-scroll">
        {character.episode.map((episode: string) => (
          <li key={episode}>
            <a href={episode} className="text-xl font-bold">
              {episode}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
