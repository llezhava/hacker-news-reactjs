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

  componentDidUpdate(prevprops) {
    let { id } = this.props;
    if(prevprops.id !== this.props.id) {
      this.setState({ isLoading: true }, this.fetch(id));
    }
  }

  render() {
    let itemData = Object.assign({}, this.state.data, this.props)
    return (
      <WaitingForData isFetching={this.state.isFetching}>
        <Card {...itemData}/>
      </WaitingForData>
    );
  }
}

export default SingleItem;
