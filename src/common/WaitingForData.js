import React, {Component} from "react"

function IsFetching(props) {
    let {isFetching} = props

    console.log(isFetching)

    console.log("IsFetching", isFetching)
    if(isFetching) {
        return "Loading..."
    } else {
        return <div>{props.children}</div>
    }
}

export default IsFetching