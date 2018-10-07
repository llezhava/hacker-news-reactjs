import React, { Component } from 'react';
import firebase from 'firebase';

function Item({id}) {
  return(
    <div className="testItem">Id of the given item is: {id}</div>
  )
}

// Initialize Firebase
const firebaseConfig = {
    databaseURL: "https://hacker-news.firebaseio.com/",
  };
  firebase.initializeApp(firebaseConfig);
  
  // Create a reference with .ref() instead of new Firebase(url)
  const rootRef = firebase.database()
  const itemsRef = rootRef.ref('v0')

  const MAX_ITEM = "maxitem"

  function getItem(itemNumber) {
    let item = itemsRef.child("item").child(itemNumber).once("value").then(item => {
      console.log(item.val())
      return item
    })
  }

  function getMaxItem() {
    console.log("Started listening to max items.")
    let maxItem = itemsRef.child(MAX_ITEM).on("child_changed", item => {
      console.log("MaxItemChanged",item, item.val())
    })
  }

  function getNewStories() {
    console.log("Started listening to new stories change")
    let maxItem = itemsRef.child("newstories").on("child_changed", item => {
      console.log("newstorieschanged", item.val())
    })
  }

  function newStoriesAdded() {
    console.log("Started listening to new stories add")
    let maxItem = itemsRef.child("newstories").on("child_added", item => {
      console.log("newstorieschild_added",item.val())
    })
  }

  getMaxItem()
  getNewStories()
  newStoriesAdded()
  
  class HomePage extends Component {
    constructor(props) {
      super(props)
      this.state = {items: [9]}

      this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
      getItem("18150731")
      getMaxItem()
    }

    render() {
      return (
        <div className="App">
        <button onClick={this.handleClick}>Get New Items</button>
        {this.state.items.map((item, index) => {
          return <Item key={index} id={item} />
        })}
        </div>
      );
    }
  }
  

export default HomePage