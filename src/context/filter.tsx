"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
} from "react";
import { Character } from "..";

interface RickAndMortyContextProps {
  characters: Character[];
  setCharacters: Dispatch<React.SetStateAction<Character[]>>;
}

const RickAndMortyContext = createContext<RickAndMortyContextProps | undefined>(
  undefined
);

export const RickAndMortyProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [characters, setCharacters] = useState<Character[]>([]);

  return (
    <RickAndMortyContext.Provider value={{ characters, setCharacters }}>
      {children}
    </RickAndMortyContext.Provider>
  );
};

export const useRickAndMorty = () => {
  const context = useContext(RickAndMortyContext);
  if (context === undefined) {
    throw new Error(
      "useRickAndMorty must be used within a RickAndMortyProvider"
    );
  }
  return context;
};
