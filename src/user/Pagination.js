import React from "react";
import { Link } from "react-router-dom";

function Pagination({ currentPage, path }) {
  let nextPage = Number(currentPage) + 1;
  let previousPage = Number(currentPage) - 1;

  return (
    <div className="pagination">
      {previousPage < 0 ? (
        ""
      ) : (
        <Link to={`${path}/${previousPage}`}>Previous</Link>
      )}
      <Link to={`${path}/${nextPage}`}>Next</Link>
    </div>
  );
}

/**
 * Display More if previousPage is less, than zero
 * Link to currentPage/previousPage if clicked less
 * Link to currentPage/nextPage if clicked more
 */

export default Pagination;
