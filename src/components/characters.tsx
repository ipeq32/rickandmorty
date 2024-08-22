"use client";

import { useRickAndMorty } from "@/context/filter";
import Link from "next/link";
import React, { useEffect } from "react";

import Image from "next/image";
import { Character } from "..";
import { filterAction } from "@/actions/filterAction";

function CharactersComponent() {
  const { characters, setCharacters } = useRickAndMorty();

  useEffect(() => {
    const fetchData = async () => {
      const formData = new FormData();

      const results = await filterAction(formData);
      setCharacters(results);
    };

    fetchData();
  }, [setCharacters]);

  return (
    <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {characters.map((character: Character) => (
        <li
          key={character.id}
          className="flex flex-col gap-5 p-5 bg-white shadow-md rounded-md"
        >
          <Link href={`/${character.id}`}>
            <Image
              src={character.image}
              alt={character.name}
              width={300}
              height={300}
              className="rounded-md"
            />
            <div className="flex justify-between items-center gap-2">
              <h2 className="text-xl font-bold">{character.name}</h2>
              <p className="text-sm">{character.species}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm">{character.status}</p>
              <p className="text-sm">{character.location.name}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CharactersComponent;
