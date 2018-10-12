/*

I have comments data structure

Traverse the data structure.

Render <Comment {...comments} />

Add isHidden property to each comment

If the comment is Not hidden, don't render it's children

*/

import React, { Component } from "react";
import Comment from "./Comment";
import getComments, {flattenComments} from "../services/getComments";

let comment1 = { by: "George", text: "I am awesome!", time: 955 };
let comment2 = { by: "Nodari", text: "I am great!", time: 259 };

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = { comments: [] };
    console.log(props);
    this.getComments(props.id);
    this.clickHandler = this.clickHandler.bind(this);
    this.findComment = this.findComment.bind(this)
  }

  clickHandler(e) {
    // Find the comment into the comments
    let newComments = (Object.assign({}, this.state.comments))

    // Update the state.
    console.log("Event:", e);
    let comment = this.findComment(newComments, e);
    console.log("Comment: ", comment);
  }

  findComment(comments, id, foundComment = undefined) {
    if (foundComment) return foundComment
    if (comments.length <= 0) return false;
    let kids = [];
    let matches = false;

    for (let i = 0; i < comments.length; i++) {
      let comment = comments[i];
      matches = Number(comment.id) === Number(id);
      console.log("Comparing", Number(comment.id), Number(id), matches);
      if (matches) {
          return this.findComment(undefined, undefined, comment)
      } else if (!comment.kids || comment.kids.length <= 0) continue;
      else kids = [...kids, ...comment.kids];
    }

    if (matches) return foundComment;
    
    this.findComment(kids, id, foundComment);
  }

  //   findComment(comments, id) {
  //       comments.forEach(comment => {
  //           console.log("Looking into the comment: ", comment.id, comment.kids)
  //           return false

  //         let commentID = Number(comment.id)
  //           if(commentID == Number(id)) {
  //               console.log("Found!", comment)
  //               return comment
  //           }
  //           else if(!comment.kids || comment.kids.length <=0) return false
  //           else return this.findComment(comment.kids, id)
  //       })
  //   }

  getComments(id) {
    getComments(id).then(comments => {
      console.log(comments.kids);
      let newComments = flattenComments(comments.kids)
      console.log(newComments)
      this.setState({ comments: comments.kids });
    });
  }

  renderComments(comments, nestLevel = 0) {
    if (comments.length <= 0) {
      return comments;
    }
    nestLevel += 1;
    return comments.map(comment => {
      return (
        <div
          className="commentBody"
          nestLevel={nestLevel}
          ishidden={comment.isHidden}
        >
          <li>
            <Comment
              {...comment}
              clickHandler={this.clickHandler}
              nestLevel={nestLevel}
            />
          </li>
          {comment.kids ? this.renderComments(comment.kids, nestLevel) : ""}
        </div>
      );
    });
  }

  render() {
    let comments = this.renderComments(this.state.comments);
    return <section className="comments">{comments}</section>;
  }
}

export default Comments;
