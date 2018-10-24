import React, { Component } from "react";
import Paginate from "./Paginate"
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

    console.log(prevProps, this.props)

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
export default Pagination;
