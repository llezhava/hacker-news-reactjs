import React, { Component } from "react";
import Card from "../story/Card";
import { getItems, getUserData } from "../services/hackernewsapi";
import withPagination from "./withPagination";

let filter = i => i.type === "story"

function getData(userName, filter) {
  return getUserData(userName)
    .then(userData => {
      let listOfItems = userData.val().submitted;
      return getUserData(listOfItems);
    })
    .then(listOfItems => {
      return listOfItems.map(i => i.val()).filter(filter);
    });
}

function Submissions({ data }) {
  return (
    <div>
      {data.map((story, index) => {
        <Card key={index} {...story.story} index={story.index} />;
      })}
    </div>
  );
}

let PaginationSubmissions = withPagination(submissions, getData);
