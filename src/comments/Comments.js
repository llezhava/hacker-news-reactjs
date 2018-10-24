import React, { Component } from "react";
import Comment from "./Comment";
import { getItem } from "../services/hackernewsapi";
import styles from "./comments.module.css";

/*
TODO 1: Refactor getComments() function, it now takes StoryId and kids props. 
        I am considering to separate story fetching functionality from this component.
*/

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = { kids: [], notFound: false };
  }

  componentDidMount() {
    this.getComments(this.props.storyId, this.props.newKids);
  }

  // If StoryID is received, update from StoryId.
  getComments(storyId) {
    if (storyId) {
      getItem(storyId).then(dataSnapshot => {
        let item = dataSnapshot.val();
        let kids;
        if (item) {
          kids = item.kids || [];
          this.setState({ kids });
        } else this.setState({ notFound: true });
      });
    } else {
    }
  }

  render() {
    return (
      <section className={styles.comments}>
        {this.state.notFound
          ? ""
          : this.state.kids.map((kid, index) => (
              <Comment key={index} id={kid} />
            ))}
      </section>
    );
  }
}

export default Comments;
