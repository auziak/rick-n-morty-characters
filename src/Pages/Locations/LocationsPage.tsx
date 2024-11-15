import { useEffect, useState } from "react";
import { CardsList } from "../../components/Cards/CardsList";
import { API_URL } from "../../constants";
import { Character, Location, Locations } from "../../entities";
import { LocationsSelector } from "./LocationsSelector";

const locationsApi = `${API_URL}/location`;

export const LocationsPage = () => {
  const [locations, setLocations] = useState<Locations | null>(null);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  useEffect(() => {
    (async () => {
      const locationsData: Locations = await fetch(locationsApi).then(res => res.json());
      setLocations(locationsData);
      setSelectedLocation(locationsData.results.length ? locationsData.results.at(0)! : null);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (selectedLocation) {
        const characters: Character[] = await Promise.all(
          selectedLocation?.residents?.map(async character => {
            return fetch(character).then(res => res.json());
          })
        );
        setCharacters(characters);
      }
    })();
  }, [selectedLocation]);

  return (
    <>
      <div className="container">
        <div className="row mb-3">
          <div className="col-lg-3 col-12 mb-4">
            <LocationsSelector
              locations={locations?.results ?? []}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
            />
          </div>
          <CardsList pageRoute="/locations/" results={characters} />
        </div>
      </div>
    </>
  );
};
