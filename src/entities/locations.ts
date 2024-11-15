import { Info } from "./shared";

export type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};

export type Locations = {
  info: Info;
  results: Location[];
  url: string | null;
  created: string;
};
