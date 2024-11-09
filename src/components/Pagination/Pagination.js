import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
// styles
import "./Pagination.css";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  const pageChange = data => {
    setPageNumber(data.selected + 1);
  };
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimentions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimentions);
    return () => window.removeEventListener("resize", updateDimentions);
  }, []);

  return (
    <ReactPaginate
      forcePage={pageNumber - 1}
      marginPagesDisplayed={width < 576 ? 1 : 2}
      pageRangeDisplayed={width < 576 ? 1 : 2}
      pageCount={info?.pages}
      onPageChange={pageChange}
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

export default Pagination;
