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

/**
 * @param allData: [] All the data the component needs to paginate
 * @param perPage: Number. Items that will appear per page.
 * @param addIndex: boolean. Enumerate items into the pagination or not.
 */

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], currentPage: 0 };
    this.handleChangePage = this.handleChangePage.bind(this);
  }

  componentDidMount() {
    let currentPage = this.props.match.params.page || 0;
    this.handleChangePage(currentPage);
  }

  componentDidUpdate(prevProps) {
    let isPageChanged =
      prevProps.match.params.page !== this.props.match.params.page;
    let isDataChanged = prevProps.allData !== this.props.allData;
    let isIndexingChanged = prevProps.addIndex !== this.props.addIndex;

    if (isPageChanged || isDataChanged || isIndexingChanged) {
      let currentPage = this.props.match.params.page || 0;
      this.setState({ items: [], currentPage }, () =>
        this.handleChangePage(currentPage, this.props.addIndex)
      );
    }
  }

  sliceItems(items, currentPage, perPage) {
    let currentStart = perPage * currentPage;
    return items.slice(currentStart, currentStart + perPage);
  }

  handleChangePage(currentPage, addIndex = true) {
    let { allData, perPage } = this.props;
    let processedItems = allData;
    if (addIndex) {
      processedItems = processedItems.map((i, index) => {
        return { id: i, index };
      });
    }

    let items = this.sliceItems(processedItems, currentPage, perPage);
    this.setState({ items, currentPage });
  }

  render() {
    return (
      <div>
        {this.props.render(this.state.items)}
        <Paginate currentPage={this.state.currentPage} {...this.props} />
      </div>
    );
  }
}

// TODO: IMPLEMENT THIS FUNCTION, PARSE ALL THE URLS WITHOUT /

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

export default Pagination;
