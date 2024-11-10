import { Search } from "../Search/Search";
import FilterSection from "./components/FilterSection/FilterSection";

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

const sections = ["Status", "Species", "Gender"];

const Filter = props => {
  const {
    searchText,
    setSearchText,
    setPageNumber,
    setGender,
    setSpecies,
    setStatus,
    selectedGender,
    selectedSpecies,
    selectedStatus,
  } = props;
  const selectedOptions = {
    Gender: selectedGender,
    Species: selectedSpecies,
    Status: selectedStatus,
  };
  const clearFilters = () => {
    setSearchText("")
    setStatus("");
    setGender("");
    setSpecies("");
    setPageNumber(1);
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
            setOption={props[`set${section}`]}
            options={options[`${section.toLowerCase()}Options`]}
            selectedOptions={selectedOptions}
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;
