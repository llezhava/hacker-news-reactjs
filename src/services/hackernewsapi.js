import firebase from "firebase";
import * as types from "./operationTypes";

// Initialize Firebase
const firebaseConfig = {
  databaseURL: "https://hacker-news.firebaseio.com/"
};
firebase.initializeApp(firebaseConfig);

// Create a reference with .ref() instead of new Firebase(url)
const rootRef = firebase.database().ref("v0");


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

function getStory(type) {
  switch (type) {
    case types.GET_BEST_STORIES:
      return getStoryItem("beststories");
    case types.GET_NEW_STORIES:
      return getStoryItem("newstories");
    case types.GET_TOP_STORIES:
      return getStoryItem("topstories");
    default:
      break;
  }
}

function getStoryItem(type) {
  return rootRef
    .child(type)
    .once("value")
    .then(IDlist => {
      return IDlist.val();
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
    .once("value")
    .then(userData => userData.val());
  return item;
}
function getDataRange(idList, n, type, start, end) {
  let _idList = [...idList]
  let typeMatch = 0;

  let data = []

  // Get the data (_idList.shift())

  // Check if matches type
  // increment typeMatch if so

  // Check if it is within the range.
  // Push it into the data if so.

  // HOW TO STOP THE WHILE LOOP
  // 1: data.length >= n
  // 2: _idList is empty

  // while(needData) {

  // }

}


export { getStories, getStory, getItem, getItems, getUserData };
