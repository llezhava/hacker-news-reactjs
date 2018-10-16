import React, { Component } from "react";
import Pagination from "./Pagination";
import { getStory } from "../services/hackernewsapi";
import SingleItem from "./SingleItem";

class Stories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /*
       [{item: 18231097, index: 0}]
      */
      itemsList: [],
      pageNumber: props.match.params.page || 0,
      path: this.getPath(props.match.path),
      hasError: false
    };
  }

  getPath(path) {
    let regex = /\/:.*/gi;
    return path.replace(regex, "");
  }

  componentDidMount() {
    this.updateStoryItems(this.props.category);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.setState({ stories: [] });
      this.updateStoryItems(this.props.category);
    }

    if (prevProps.match.params.page !== this.props.match.params.page) {
      this.setState({
        itemsList: [],
        pageNumber: this.props.match.params.page
      });
      this.updateStoryItems(this.props.category);
    }

    if (prevProps.match.path !== this.props.match.path) {
      this.setState({
        itemsList: [],
        path: this.getPath(this.props.match.path)
      });
      this.updateStoryItems(this.props.category);
    }

    if (prevProps.match.url !== this.props.match.url) {
      this.setState({
        itemsList: [],
        path: this.getPath(this.props.match.path)
      });
      this.updateStoryItems();
    }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
  }

  updateStoryItems() {
    let { category } = this.props;

    getStory(category).then(idList => {
      console.log(idList);
      let itemsList = this.getItems(idList, this.state.pageNumber);
      this.setState({ itemsList });
    });
  }

  getItems(stories, pageNumber, itemsPerPage = 50) {
    let currentStart = itemsPerPage * pageNumber;
    let currentItems = stories
      .slice(currentStart, currentStart + itemsPerPage)
      .map((story, index) => {
        return { id: story, index: index + currentStart };
      });
    return currentItems;
  }

  render() {
    if (this.state.hasError) {
      return <div className="error">Error occured!</div>;
    }
    return (
      <div className="container">
        {this.state.itemsList.map((id, index) => (
          <div className="storyItem">
          <SingleItem key={index} id={id.id} />
          </div>
        ))}
        <Pagination pageNumber={this.state.pageNumber} path={this.state.path} />
      </div>
    );
  }
}

export default Stories;
