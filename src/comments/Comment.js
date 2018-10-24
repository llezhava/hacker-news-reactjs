import React, { Component } from "react";
import Comments from "./Comments";
import Card from "./Card";
import { getItem } from "../services/hackernewsapi";
import WaitingForData from "../common/WaitingForData";
import styles from "./comments.module.css";

const Children = props => {
  return <div className={styles.children}>{props.children}</div>;
};

const CommentBody = ({ text, kids }) => {
  return (
    <div className={`${styles.commentBody} commentText`}>
      <div dangerouslySetInnerHTML={{ __html: text }} />
      <Children>
        {kids
          ? kids.map((kid, index) => {
              return <Comment key={index} id={kid} />;
            })
          : ""}
      </Children>
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
    this.countChildren = this.countChildren.bind(this);
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
    this.countChildren();
  }

  countChildren() {
    console.log("Counting children...", React.Children, this.props.children);
    let currentComment = document.getElementById(this.props.id)
    let totalChildren = currentComment.getElementsByClassName("commentText").length
    console.log(totalChildren)
  }

  render() {
    return (
      <div className={`${styles.comment}`} id={this.props.id}>
        <WaitingForData isFetching={this.state.isFetching}>
          <Card
            {...this.state.data}
            toggleVisible={this.toggleVisible}
            isVisible={this.state.isVisible}
            countChildren={this.countChildren}
          />
          <div hidden={!this.state.isVisible}>
            <CommentBody {...this.state.data} />
          </div>
        </WaitingForData>
      </div>
    );
  }
}

export default Comment;
