import FilterSection from "./components/FilterSection/FilterSection"

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
    "Planet"
  ],
  genderOptions: ["female", "male", "genderless", "unknown"]
}

const sections = ["Status", "Species", "Gender"]

const Filter = props => {
  const {
    setPageNumber,
    setGender,
    setSpecies,
    setStatus,
    selectedGender,
    selectedSpecies,
    selectedStatus
  } = props
  const selectedOptions = {
    Gender: selectedGender,
    Species: selectedSpecies,
    Status: selectedStatus
  }
  const clearFilters = () => {
    setStatus("")
    setGender("")
    setSpecies("")
    setPageNumber(1)
  }
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
      <div
        style={{ cursor: "pointer" }}
        onClick={clearFilters}
        className="btn btn-outline-info mb-3"
      >
        Clear All
      </div>
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
  )
}

export default Filter
