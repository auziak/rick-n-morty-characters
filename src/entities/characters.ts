import { Info } from "./shared";

export type CharacterStatus = "Dead" | "Alive" | "unknown" | "info";

export type Character = {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type Characters = {
  info: Info;
  results: Character[];
};
