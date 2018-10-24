import React, { Component } from "react";
import Card from "../story/Card";
import Comments from "./Comments"
import * as api from "../services/hackernewsapi";
import WaitingForData from "../common/WaitingForData"
import styles from "./comments.module.css"

class FullStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemData: {},
      comments: [],
      hasError: false,
      notFound: false,
      isFetching: true
    };
    
    this.getItemData(props.match.params.id);
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
  }


  getItemData(id) {
    let itemData = api.getItem(id);
    itemData.then(i => {
      let itemData = i.val();
      if(itemData) this.setState({ itemData, isFetching: false });
      else this.setState({notFound: true})
      
    });
  }

  render() {
    if(this.state.hasError) {
      return <div className="error">Error occured!</div>
    }
    if(this.state.notFound) {
      return <div className={styles.fullStory}>We could not find the following item.</div>
    }

    return (
      <div className={styles.fullStory}>
      <WaitingForData isFetching={this.state.isFetching}>
        <Card {...this.state.itemData}/>
        <Comments storyId={this.props.match.params.id} />
        </WaitingForData>
      </div>
    );
  }
}
export default FullStory;
