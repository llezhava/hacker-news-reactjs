import React, { Component } from "react";
import { Link } from "react-router-dom";

/**
 * Display More if previousPage is less, than zero
 * Link to currentPage/previousPage if clicked less
 * Link to currentPage/nextPage if clicked more
 */

function Paginate({ currentPage, match }) {
    let path = normalizePath(match);
  
    let nextPage = Number(currentPage) + 1;
    let previousPage = Number(currentPage) - 1;
    return (
      <div className="pagination">
        {previousPage < 0 ? (
          ""
        ) : (
          <Link to={`${path}/page/${previousPage}`}>Previous</Link>
        )}
        <Link to={`${path}/page/${nextPage}`}>Next</Link>
      </div>
    );
  }

  export default Paginate

function normalizePath(match) {
    let path;
    let isHomePage = match.path === "/"
    console.log("Match from current Pagination: ", match)
  
  
    if(!isHomePage) {
     path = trimPageNumber(match.url)
    } else {
      path = getPath(match.path)
    }
  
    if(path.lastIndexOf("/") === path.length -1) {
      path = path.slice(0, path.length - 2)
    }
    return path
  }
  
  function getPath(path) {
    let regex = /\/:.*/gi;
    return path.replace(regex, "");
  }
  
  function trimPageNumber(url) {
    let regex = /\/page\/.*/gi;
    return url.replace(regex, "");
  }
  