import React, { Component } from "react";
import { Link } from "react-router-dom";

/**
 * Display More if previousPage is less, than zero
 * Link to currentPage/previousPage if clicked less
 * Link to currentPage/nextPage if clicked more
 */

function Paginate({ currentPage, match }) {
  let path = getPath(match.path);
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
    let isIndexingChanged = prevProps.addIndex !== this.props.addIndex

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

function getPath(path) {
  let regex = /\/:.*/gi;
  return path.replace(regex, "");
}

export default Pagination;
