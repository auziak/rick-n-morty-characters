import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
// styles
import { INITIAL_PAGE, MOBILE_WIDTH } from "../../constants";
import { Info } from "../../entities";
import "./Pagination.css";

type Props = { info?: Info; pageNumber: number; setPageNumber: (value: number) => void };

export const Pagination = ({ info, pageNumber, setPageNumber }: Props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <ReactPaginate
      forcePage={pageNumber - 1}
      marginPagesDisplayed={width < MOBILE_WIDTH ? 1 : 2}
      pageRangeDisplayed={width < MOBILE_WIDTH ? 1 : 2}
      pageCount={info?.pages ?? INITIAL_PAGE}
      onPageChange={data => {
        setPageNumber(data.selected + 1);
      }}
      className="pagination justify-content-center my-4 gap-4"
      nextLabel="Next"
      previousLabel="Prev"
      previousClassName="btn btn-primary fs-5 prev"
      nextClassName="btn btn-primary fs-5 next"
      activeClassName="active"
      pageClassName="page-item"
      pageLinkClassName="page-link"
    />
  );
};
