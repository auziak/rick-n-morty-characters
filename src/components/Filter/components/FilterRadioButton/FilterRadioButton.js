import "./FilterRadioButton.css"

const FilterButton = ({ input, setSelectedOption, setPageNumber, index, name, selectedOption }) => {
  return (
    <div>
      <div
        className="form-check mt-1"
        onClick={() => {
          setSelectedOption(input)
          setPageNumber(1)
        }}
      >
        <input
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
          checked={input === selectedOption ? true : false}
        />
        <label for={`${name}-${index}`}> {input} </label>
      </div>
    </div>
  )
}

export default FilterButton
