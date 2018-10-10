import React from "react"
import Card from "./Card";

function Page({items}) {
    return(
        <div className="stories">
        {items.map((story, index) => (
          <Card key={index} {...story.story} index={story.index} />
        ))}
        </div>
    )
}

export default Page