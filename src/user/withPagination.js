import React, {Component} from "react"
import Pagination from "./Pagination"

function withPagination(WrappedComponent, getData) {
    return class extends Component{
        constructor(props) {
            super(props)
            this.state = {
                data = [],
                currentPage = 0
            }
            this.updateData()
        }

        getPath(path) {
            let regex = /\/:.*/gi;
            return path.replace(regex, "");
          }

        updateData() {
            getData().then(data => {
                let newData = this.sliceItems(data, this.state.currentPage)
                this.setState({data: newData})
            })
        }

        sliceItems(items, pageNumber, itemsPerPage = 50) {
            let currentStart = itemsPerPage * pageNumber;
            let currentItems = items
              .slice(currentStart, currentStart + itemsPerPage)
              .map((item, index) => {
                return { item, index: index + currentStart };
              });
            return currentItems;
          }


        componentDidUpdate(prevProps) {
            if (prevProps.match.params.page !== this.props.match.params.page) {
              this.setState({
                data: [],
                currentPage: this.props.match.params.page
              });
              this.updateData();
            }
          }

          render() {
            // ... and renders the wrapped component with the fresh data!
            // Notice that we pass through any additional props
            return <div><WrappedComponent data={this.state.data} {...this.props} />
            <Pagination currentPage = {this.state.currentPage} path={this.getPath(this.props.match.path)}/></div>;
          }
    }

}

export default withPagination