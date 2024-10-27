import { useRef } from "react"
import styles from "./Search.module.scss"

const Search = ({ setSearchValue }) => {
  const inputElement = useRef(null)

  const handleSubmit = (e, value) => {
    e.preventDefault()
    setSearchValue(value)
  }
  return (
    <form
      className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-3 mb-5`}
      onSubmit={e => handleSubmit(e, inputElement.current.value)}
    >
      <input
        className={styles.input}
        type="text"
        placeholder="Search for characters"
        ref={inputElement}
      />
      <button className={`${styles.btn} btn btn-primary fs-5`} type="submit">
        Search
      </button>
    </form>
  )
}

export default Search
