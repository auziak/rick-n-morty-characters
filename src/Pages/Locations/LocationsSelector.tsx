import { Location } from "../../entities";

type Props = {
  locations: Location[] | null;
  selectedLocation?: Location | null;
  setSelectedLocation: (value: Location) => void;
};

export const LocationsSelector = ({ locations, selectedLocation, setSelectedLocation }: Props) => {
  return (
    <div className="col mb-3">
      <div>
        <h5 className="my-2">Dimension: {selectedLocation?.dimension || "Unknown"}</h5>
        <h5 className="my-2">Type: {selectedLocation?.type || "Unknown"}</h5>
      </div>
      <select
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setSelectedLocation(locations?.find(ep => String(ep.id) === e.target.value)!)
        }
        className="form-select"
        value={selectedLocation?.id}
      >
        <option value="0">Not selected</option>
        {locations?.map(location => {
          return <option value={location.id}>{location.name}</option>;
        })}
      </select>
    </div>
  );
};
