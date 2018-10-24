import React, { Component } from "react";
import Comments from "./Comments";
import Card from "./Card";
import { getItem } from "../services/hackernewsapi";
import WaitingForData from "../common/WaitingForData";
import styles from "./comments.module.css";

const CommentBody = ({ text, kids }) => {
  return (
    <div className={styles.commentBody}>
      <div dangerouslySetInnerHTML={{ __html: text }} />
      <div className={styles.children}>{kids ? <Comments newKids={kids} /> : ""}</div>
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
    this.setState({ isVisible: !this.state.isVisible });
  }

  render() {
    return (
      <div className={styles.comment}>

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
