import React, { Component } from "react";
import Comment from "./Comment";
import { getItem, getItems } from "../services/hackernewsapi";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = { comments: [] };
    this.getComments(props.storyId, props.newKids);
  }

  // If StoryID is received, update from StoryId.
  // Else update from newKids
  getComments(storyId, kids) {
    if (storyId) {
      getItem(storyId)
        .then(dataSnapshot => {
          let item = dataSnapshot.val();
          console.log(item)
          let comments = item.kids || [];
          return getItems(comments);
        })
        .then(commentsDataSnapshot => {
          let comments = commentsDataSnapshot.map(comment => comment.val());
          this.setState({ comments: comments });
        });
    } else {
      getItems(kids).then(dataSnapshots => {
        let comments = dataSnapshots.map(i => i.val());
        this.setState({ comments });
      });
    }
  }

  render() {
    return (
      <section className="comments">
        {this.state.comments.map(comment => (
          <Comment {...comment} />
        ))}
      </section>
    );
  }
}

export default Comments;
