import { useEffect, useState } from "react"
import Cards from "../../components/Cards/Cards"
import { LocationsSelector } from "./LocationsSelector"
import { Character, Location, Locations } from "../../entities"

const locationsApi = `https://rickandmortyapi.com/api/location`

export const LocationsPage = () => {
  const [locations, setLocations] = useState<Locations | null>(null)
  const [characters, setCharacters] = useState<Character[]>([])
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)

  useEffect(() => {
    ;(async function () {
      const locationsData: Locations = await fetch(locationsApi).then(res => res.json())
      setLocations(locationsData)
      setSelectedLocation(locationsData.results.length ? locationsData.results.at(0)! : null)
    })()
  }, [locationsApi])

  useEffect(() => {
    ;(async function () {
      if (selectedLocation) {
        const characters: Character[] = await Promise.all(
          selectedLocation?.residents?.map(async character => {
            return fetch(character).then(res => res.json())
          })
        )
        setCharacters(characters)
      }
    })()
  }, [selectedLocation])

  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center mb-3">
          Location name :{" "}
          <span className="text-primary">{selectedLocation?.name || "Unknown"}</span>
        </h1>
        <h5 className="text-center">Dimention: {selectedLocation?.dimension || "Unknown"}</h5>
        <h6 className="text-center">Type: {selectedLocation?.type || "Unknown"}</h6>
        <div className="row">
          <div className="col-lg-3 col-12 mb-4">
            <h4 className="text-center mb-4">Pick Location</h4>
            <LocationsSelector
              locations={locations?.results ?? []}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
            />
          </div>
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page="/locations/" results={characters} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
