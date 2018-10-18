import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { getStory } from "../services/hackernewsapi";
import SingleItem from "./SingleItem";

class Stories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /*
       [{id: 18231097, index: 0}]
      */
      itemsList: [],
      hasError: false
    };
  }

  componentDidMount() {
    this.updateStoryItems(this.props.category);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.setState({ stories: [] }, this.updateStoryItems(this.props.category));
      
    }

    if (prevProps.match.path !== this.props.match.path) {
      this.setState({ stories: [] }, this.updateStoryItems(this.props.category));

  }
}

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
  }

  updateStoryItems() {
    let { category } = this.props;

    getStory(category).then(idList => {
      let itemsList = idList.map((id, index) => {
        return { id, index };
      });
      this.setState({ itemsList });
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
          allData={this.state.itemsList}
          perPage={15}
          render={renderFunction}
        />
      </div>
    );
  }
}

function renderFunction(items) {
  let mappedItems = items.map((id, index) =>  {
      return <div><SingleItem key={index} id={id} index={index} /></div>
  })
  return mappedItems
}

function StoriesWithPagination(props) {
  return( <Pagination
    {...this.props}
      allData={this.state.itemsList}
      perPage={15}
      render={renderFunction}
    />)
}

export default Stories;
