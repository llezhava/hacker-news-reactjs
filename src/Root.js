import React from "react";
import App from "./App";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

export default function Root(props) {
  return (
    <Router>
      <Route path="/" component={App} />
    </Router>
  );
}
