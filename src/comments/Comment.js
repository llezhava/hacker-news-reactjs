import React, { Component } from "react";
import Comments from "./Comments";
import Card from "./Card";
import { id } from "postcss-selector-parser";

// function Comment({ by, text, time, clickHandler, id }) {
//   return (
//     <div className="comment">
//       <div className="metaInformation">
//         <button onClick={e => clickHandler(id)}>+</button>
//         by {by} |{time}
//       </div>
//       {text}
//     </div>
//   );
// }

const RenderKids = ({ kids }) => {
  function getKids() {
    if (kids) {
      return <Comments newKids={kids} />;
    } else {
      return "";
    }
  }
  return <div className="children">{getKids()}</div>;
};

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    this.setState({ visible: !this.state.isVisible });
  }

  render() {
    return (
      <div className="comment">
        <div className="metaInformation">
          <button onClick={this.clickHandler}>+</button>
          by {this.props.by} |{this.props.time}
        </div>
        <div className="comment">{this.props.text}</div>
          <RenderKids kids={this.props.kids} />
      </div>
    );
  }
}

export default Comment;
