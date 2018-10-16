import React, { Component } from "react";
import Comments from "./Comments";
import Card from "./Card";
import { getItem } from "../services/hackernewsapi";
import WaitingForData from "../common/WaitingForData";

const CommentBody = ({ text, kids }) => {
  console.log("Kids: ", kids, text);
  return (
    <div className="comment">
      <div dangerouslySetInnerHTML={ {__html: text} } />
      <div className="children">{kids ? <Comments newKids={kids} /> : ""}</div>
    </div>
  );
};

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined,
      isFetching: true,
      isVisible: true
    };

    this.toggleVisible = this.toggleVisible.bind(this);
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

  toggleVisible(e) {
    console.log("Clicked");
    this.setState({ isVisible: !this.state.isVisible });
  }

  render() {
    return (
      <div className="comment">
        <WaitingForData isFetching={this.state.isFetching}>
          <Card
            {...this.state.data}
            toggleVisible={this.toggleVisible}
            isVisible={this.state.isVisible}
          />
          {this.state.isVisible ? <CommentBody {...this.state.data} /> : ""}
        </WaitingForData>
      </div>
    );
  }
}

export default Comment;