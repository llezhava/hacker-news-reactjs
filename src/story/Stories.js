import React, { Component } from "react";
import Page from "./Page";
import Pagination from "./Pagination";
import { getStory, getItem , getStories} from "../services/hackernewsapi";
import Data from "./Data"
import WaitingForData from "../common/WaitingForData"

const initialState = {
  currentDisplay: 0,
  stories: [],
  pageNumber: 0,
  path: undefined
};

const style= {
  height: "100%",
  width: "100%"
}

class Storiesx extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      pageNumber: props.match.params.page || 0,
      path: this.getPath(props.match.path),
      hasError: false,
      isFetching: true
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
      this.updateStoryItems();
    }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
  }

  updateStoryItems() {
    this.setState({isFetching: true}, this.getNewStories)
    
  }

  getNewStories() {
    let category = this.props.category;

    getStories(category).then(rawStories => {
      let stories = this.getItems(rawStories, this.state.pageNumber).map(
        story => {
          return { story: story.item.val(), index: story.index };
        }
      );
      this.setState({ stories, isFetching: false });
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
    if (this.state.hasError) {
      return <div className="error">Error occured!</div>;
    }

    return (
      <div className="container">
      <WaitingForData isFetching={this.state.isFetching}>
        <Page items={this.state.stories} style={style} />
        </WaitingForData>
        <Pagination pageNumber={this.state.pageNumber} path={this.state.path} />
      </div>
    );
  }
}

class Stories extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      this.updateStoryItems();
    }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
  }

  updateStoryItems() {
    let {category} = this.props;

    getStory(category).then(idList => {
      let items = this.getItems(idList, this.state.pageNumber)
      this.setState({idList: items})
    })
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
    if (this.state.hasError) {
      return <div className="error">Error occured!</div>;
    }
    return (
      <div className="container">
        <Page items={this.state.itemsList} />
        <Pagination pageNumber={this.state.pageNumber} path={this.state.path} />
      </div>
    );
  }
}



export default Stories;
