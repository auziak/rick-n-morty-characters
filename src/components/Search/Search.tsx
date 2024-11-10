import { ChangeEvent, FC } from "react";
import styles from "./Search.module.scss";

type Props = { searchText: string; setSearchText: (text: string) => void };

export const Search: FC<Props> = ({ searchText, setSearchText }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <input
      value={searchText}
      className={`${styles.input} mb-5`}
      type="text"
      placeholder="Search for characters"
      onChange={handleChange}
    />
  );
};
