import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import { getUserData, getItems } from "../services/hackernewsapi";
import Pagination from "../common/pagination/Pagination";
import WaitingForData from "../common/WaitingForData"
import Card from "../story/Card";

class Submissions extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], isFetching: true };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    let type = "story";

    let userName = this.props.match.params.userName;

    getUserData(userName)
      .then(userData => {
        let { submitted } = userData;
        return getItems(submitted);
      })
      .then(all => {
        let items = all.filter(i => i.type === type);
        this.setState({ items, isFetching: false });
      });
  }


  render() {
    return (
      <div>
        <WaitingForData isFetching={this.state.isFetching}>
        <Pagination
          {...this.props}
          allData={this.state.items}
          perPage={25}
          addIndex={true}
          render={items => {
            return items.map(itemData => <Card {...itemData.id} index={itemData.index} />);
          }}
        />
        </WaitingForData>
      </div>
    );
  }
}

export default Submissions;
