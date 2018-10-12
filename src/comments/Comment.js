import React, { Component } from "react";
import Card from "./Card"
import { id } from "postcss-selector-parser";


function Comment({by, text, time, clickHandler, id}) {
    return(
        <div className="comment">
        <div className="metaInformation" ><button onClick={e => clickHandler(id)} >+</button>by {by} |{time}</div>
        {text}
        </div>
    )
}

export default Comment