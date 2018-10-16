import React, { Component } from "react";
import Card from "./Card";
import { getItem } from "../services/hackernewsapi";
import WaitingForData from "../common/WaitingForData";

class SingleItem extends Component {
  constructor(props) {
    super(props);
    this.state = { data: undefined, isFetching: true };
  }

  fetch(id) {
    getItem(id).then(data => {
      this.setState({ data: data.val(), isFetching: false });
    });
  }

  componentDidMount() {
    let { id } = this.props;
    this.setState({ isLoading: true }, this.fetch(id));
  }

  render() {
    return (
      <WaitingForData isFetching={this.state.isFetching}>
        <Card {...this.state.data} />
      </WaitingForData>
    );
  }
}

export default SingleItem;
