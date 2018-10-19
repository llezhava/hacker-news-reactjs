import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { getStory } from "../services/hackernewsapi";
import SingleItem from "./SingleItem";

class Stories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idList: [],
      hasError: false
    };
  }

  componentDidMount() {
    this.updateStoryItems(this.props.category);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.setState(
        { idList: [] },
        this.updateStoryItems(this.props.category)
      );
    }

    if (prevProps.match.path !== this.props.match.path) {
      this.setState(
        { idList: [] },
        this.updateStoryItems(this.props.category)
      );
    }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
  }

  updateStoryItems() {
    let { category } = this.props;

    getStory(category).then(idList => {
      this.setState({ idList });
    });
  }

  render() {
    if (this.state.hasError) {
      return <div className="error">Error occured!</div>;
    }

    return (
      <div className="container">
        <Pagination
          {...this.props}
          allData={this.state.idList}
          perPage={15}
          addIndex={true}
          render={items => {
            return items.map((id, index) => {
              return (
                <div>
                  <SingleItem key={index} id={id.id} index={id.index} />
                </div>
              );
            });
          }}
        />
      </div>
    );
  }
}

export default Stories;
