import React from "react";
import App from "./App";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

export default function Root(props) {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route path="/" component={App} />
    </Router>
  );
}
