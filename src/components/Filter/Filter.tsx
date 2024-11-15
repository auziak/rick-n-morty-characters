import { INITIAL_PAGE } from "../../constants";
import { Search } from "../Search/Search";
import { FilterSection } from "./components/FilterSection";

export type FilterSections = "Status" | "Species" | "Gender";

export type FilterOptions = Record<FilterSections, string>;

type Props = {
  searchText: string;
  setSearchText: (value: string) => void;
  selectedGender: string;
  setSelectedGender: (value: string) => void;
  selectedSpecies: string;
  setSelectedSpecies: (value: string) => void;
  selectedStatus: string;
  setSelectedStatus: (value: string) => void;
  setPageNumber: (value: number) => void;
};

const options = {
  statusOptions: ["Alive", "Dead", "Unknown"],
  speciesOptions: [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ],
  genderOptions: ["female", "male", "genderless", "unknown"],
};

const sections: FilterSections[] = ["Status", "Species", "Gender"];

export const Filter = (props: Props) => {
  const {
    searchText,
    setSearchText,
    setPageNumber,
    setSelectedGender,
    setSelectedSpecies,
    setSelectedStatus,
    selectedGender,
    selectedSpecies,
    selectedStatus,
  } = props;

  const selectedOptions: FilterOptions = {
    Gender: selectedGender,
    Species: selectedSpecies,
    Status: selectedStatus,
  };

  const clearFilters = () => {
    setSearchText("");
    setSelectedStatus("");
    setSelectedGender("");
    setSelectedSpecies("");
    setPageNumber(INITIAL_PAGE);
  };
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="d-flex justify-content-between mb-3">
        <span className="fw-bold fs-4 ms-1">Filters:</span>
        <span style={{ cursor: "pointer" }} onClick={clearFilters} className="btn btn-outline-info">
          Clear All
        </span>
      </div>
      <Search searchText={searchText} setSearchText={setSearchText} />
      <div className="accordion" id="filterAccordion">
        {sections.map(section => (
          <FilterSection
            sectionName={section}
            setPageNumber={setPageNumber}
            setOption={props[`setSelected${section}`]}
            options={options[`${section.toLowerCase()}Options` as keyof typeof options]}
            selectedOptions={selectedOptions}
          />
        ))}
      </div>
    </div>
  );
};
