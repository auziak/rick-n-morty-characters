import { FC } from "react"
import "./FilterRadioButton.css"

type Props = {
  input: string
  setSelectedOption: (input: string) => void
  setPageNumber: (page: number) => void
  index: number
  name: string
  selectedOption: string
}

export const FilterRadioButton: FC<Props> = ({
  input,
  setSelectedOption,
  setPageNumber,
  index,
  name,
  selectedOption
}) => {
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
        <label htmlFor={`${name}-${index}`}> {input} </label>
      </div>
    </div>
  )
}
