import { Badge } from "../../../Badge";
import { FilterOptions, FilterSections } from "../../Filter";
import { FilterRadioButton } from "../FilterRadioButton/FilterRadioButton";
//css
import styles from "./FilterSection.module.scss";

type Props = {
  sectionName: FilterSections;
  setOption: (option: string) => void;
  setPageNumber: (page: number) => void;
  options: string[];
  selectedOptions: FilterOptions;
};

export const FilterSection = ({
  sectionName,
  setOption,
  setPageNumber,
  options,
  selectedOptions,
}: Props) => {
  const selectedOption = selectedOptions[sectionName];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`filter${sectionName}Header`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#filter${sectionName}Collapse`}
          aria-expanded="false"
          aria-controls={`filter${sectionName}Collapse`}
        >
          <span className="fs-5 mb-1">&nbsp;{sectionName}&nbsp;</span>
          <Badge text={selectedOption} status="info" additionalClass={"ms-2"} />
        </button>
      </h2>
      <div
        id={`filter${sectionName}Collapse`}
        className="accordion-collapse collapse"
        aria-labelledby={`filter${sectionName}Header`}
        data-bs-parent="#filterAccordion"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {options.map((option, index) => (
            <FilterRadioButton
              name={sectionName.toLowerCase()}
              index={index}
              key={index}
              setPageNumber={setPageNumber}
              setSelectedOption={setOption}
              input={option}
              selectedOption={selectedOption}
            />
          ))}
          <button
            type="button"
            className={`${styles.btn} btn btn-outline-info btn-sm`}
            onClick={() => setOption("")}
          >
            Clear {sectionName}
          </button>
        </div>
      </div>
    </div>
  );
};
