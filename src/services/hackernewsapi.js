import firebase from "firebase";
import * as types from "./operationTypes";

// Initialize Firebase
const firebaseConfig = {
  databaseURL: "https://hacker-news.firebaseio.com/"
};
firebase.initializeApp(firebaseConfig);

// Create a reference with .ref() instead of new Firebase(url)
const rootRef = firebase.database().ref("v0");

const MAX_ITEM = "maxitem";

 function getItem(itemNumber) {
  let item = rootRef
    .child("item")
    .child(itemNumber)
    .once("value");
  return item;
}

function getMaxItem() {
  let maxItem = rootRef.child(MAX_ITEM).once("value");
  return maxItem;
}

function newStoriesListener(fn) {
  return rootRef.child("newstories").on("child_changed", fn);
}

function newStoriesAdded() {
  console.log("Started listening to new stories add");
  let maxItem = rootRef.child("newstories").on("child_added", item => {
    console.log("newstorieschild_added", item.val());
  });
}

function getStories(type) {
  switch (type) {
    case types.GET_BEST_STORIES:
      return fetchStories("beststories");
    case types.GET_NEW_STORIES:
      return fetchStories("newstories");
    case types.GET_TOP_STORIES:
      return fetchStories("topstories");
    default:
      break;
  }
}

function fetchStories(type) {
  return rootRef
    .child(type)
    .once("value")
    .then(IDlist => {
      let promises = [];
      IDlist.val().forEach(id => promises.push(getItem(id)));
      return Promise.all(promises);
    });
}

export { getStories, getItem};
