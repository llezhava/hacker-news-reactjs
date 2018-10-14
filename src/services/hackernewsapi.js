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

function getItem(itemNumber) {
  let item = rootRef
    .child("item")
    .child(itemNumber)
    .once("value");
  return item;
}

function getItems(ids) {
  return Promise.all(ids.map(id => getItem(id)));
}

function getUserData(userId) {
  let item = rootRef
    .child("user")
    .child(userId)
    .once("value");
  return item;
}

export { getStories, getItem, getItems, getUserData };
