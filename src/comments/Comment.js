import React, { Component } from "react";
import Comments from "./Comments";
import Card from "./Card";
import { id } from "postcss-selector-parser";

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

const RenderBody = ({ text, kids }) => {
  return (
    <div className="body">
      {text}
      <RenderKids kids={kids} />
    </div>
  );
};

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    };

    this.toggleVisible = this.toggleVisible.bind(this);
  }

  toggleVisible(e) {
    console.log("Clicked");
    this.setState({ isVisible: !this.state.isVisible });
  }

  render() {
    return (
      <div className="comment">
        <Card {...this.props} toggleVisible={this.toggleVisible} isVisible={this.state.isVisible} />
        {this.state.isVisible ? <RenderBody {...this.props}/> : ""}
      </div>
    );
  }
}

export default Comment;
