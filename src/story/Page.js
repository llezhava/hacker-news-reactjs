import React from "react"
import Card from "./Card";
import SingleItem from "./SingleItem"

function Page({items}) {
    console.log("Getting into the page", items)
    return(
        <div className="stories">
        {items.map((id, index) => <SingleItem key={index} id={id.id} />)}
        </div>
    )
}

export default Page