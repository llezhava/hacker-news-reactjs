import React, { Component } from "react";
import Page from "./Page";
import Pagination from "./Pagination";
import { getStories } from "../services/hackernewsapi";

const initialState = {
  currentDisplay: 0,
      stories: [],
      pageNumber: 0,
      path: undefined
}

class Stories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDisplay: 0,
      stories: [],
      pageNumber: props.match.params.page || 0,
      path: this.getPath(props.match.path)
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
        stories: [],
        pageNumber: this.props.match.params.page
      });
      this.updateStoryItems(this.props.category);
    }

    if (prevProps.match.path !== this.props.match.path) {
      this.setState({ stories: [], path: this.getPath(this.props.match.path) });
      this.updateStoryItems(this.props.category);
    }

    if (prevProps.match.url !== this.props.match.url) {
      this.setState({ stories: [], path: this.getPath(this.props.match.path) });
      this.updateStoryItems(this.props.category);
    }
  }

  updateStoryItems(category) {
    getStories(category).then(rawStories => {
      let stories = this.getItems(rawStories, this.state.pageNumber).map(
        story => {
          return { story: story.item.val(), index: story.index };
        }
      );
      this.setState({ stories });
    });
  }

  getItems(stories, pageNumber, itemsPerPage = 50) {
    let currentStart = itemsPerPage * pageNumber;
    let currentItems = stories
      .slice(currentStart, currentStart + itemsPerPage)
      .map((story, index) => {
        return { item: story, index: index + currentStart };
      });
    return currentItems;
  }

  render() {
    return (
      <div className="container">
        <Page items={this.state.stories} />
        <Pagination pageNumber={this.state.pageNumber} path={this.state.path} />
      </div>
    );
  }
}

export default Stories;
