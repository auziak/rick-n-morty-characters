import { useEffect, useState } from "react";
import { CardsList } from "../../components/Cards/CardsList";
import { Character, Episode, Episodes } from "../../entities";
import { EpisodesSelector } from "./EpisodesSelector";

const episodesApi = `https://rickandmortyapi.com/api/episode`;

export const EpisodesPage = () => {
  const [episodes, setEpisodes] = useState<Episodes | null>(null);
  const [characters, setCharacters] = useState<Character[] | null>(null);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);

  useEffect(() => {
    (async () => {
      const episodesData = await fetch(episodesApi).then(res => res.json());
      setEpisodes(episodesData);
      setSelectedEpisode(episodesData.results.length ? episodesData.results.at(0)! : null);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (selectedEpisode) {
        const characters: Character[] = await Promise.all(
          selectedEpisode?.characters?.map(async character => {
            return fetch(character).then(res => res.json());
          })
        );
        setCharacters(characters);
      }
    })();
  }, [selectedEpisode]);

  return (
    <>
      <h1 className="text-center mb-3">
        Episode name : <span className="text-primary">{selectedEpisode?.name || "Unknown"}</span>
      </h1>
      <div className="container">
        <div className="row mb-3">
          <h5 className="text-center">Air Date: {selectedEpisode?.air_date || "Unknown"}</h5>
          <div className="row">
            <div className="col-lg-3 col-12 mb-4">
              <h4 className="text-center mb-4">Pick Episode</h4>
              <EpisodesSelector
                episodes={episodes?.results ?? []}
                selectedEpisode={selectedEpisode}
                setSelectedEpisode={setSelectedEpisode}
              />
            </div>
            <CardsList pageRoute="/episodes/" results={characters} />
          </div>
        </div>
      </div>
    </>
  );
};
