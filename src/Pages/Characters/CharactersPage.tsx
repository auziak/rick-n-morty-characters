import { useEffect, useState } from "react";
import { CardsList } from "../../components/Cards/CardsList";
import Filter from "../../components/Filter/Filter";
import Pagination from "../../components/Pagination/Pagination";
import { Characters } from "../../entities";

export const CharactersPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [fetchedData, setFetchedData] = useState<Characters | null>(null);
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [status, setStatus] = useState("");
  const data = fetchedData;

  const url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${searchText}&gender=${gender}&species=${species}&status=${status}`;

  // TODO: Error handling
  useEffect(() => {
    (async () => {
      const res = await fetch(url);
      const data = await res.json();
      setFetchedData(data);
    })();
  }, [url]);

  return (
    <>
      <div className="container">
        <div className="row">
          <Filter
            searchText={searchText}
            setSearchText={setSearchText}
            setPageNumber={setPageNumber}
            setGender={setGender}
            setSpecies={setSpecies}
            setStatus={setStatus}
            selectedGender={gender}
            selectedSpecies={species}
            selectedStatus={status}
          />
          <CardsList pageRoute="/" results={data?.results || []} />
        </div>
        <Pagination info={data?.info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
      </div>
    </>
  );
};
