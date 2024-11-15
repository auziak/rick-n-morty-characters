import { useEffect, useState } from "react";
import { CardsList } from "../../components/Cards/CardsList";
import { Filter } from "../../components/Filter";
import { Pagination } from "../../components/Pagination";
import { API_URL, INITIAL_PAGE } from "../../constants";
import { Characters } from "../../entities";

export const CharactersPage = () => {
  const [pageNumber, setPageNumber] = useState(INITIAL_PAGE);
  const [searchText, setSearchText] = useState("");
  const [fetchedData, setFetchedData] = useState<Characters | null>(null);
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [status, setStatus] = useState("");
  const data = fetchedData;

  const url = `${API_URL}/character/?page=${pageNumber}&name=${searchText}&gender=${gender}&species=${species}&status=${status}`;

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
            selectedGender={gender}
            setSelectedGender={setGender}
            selectedSpecies={species}
            setSelectedSpecies={setSpecies}
            selectedStatus={status}
            setSelectedStatus={setStatus}
            setPageNumber={setPageNumber}
          />
          <CardsList pageRoute="/" results={data?.results || []} />
        </div>
        <Pagination info={data?.info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
      </div>
    </>
  );
};
