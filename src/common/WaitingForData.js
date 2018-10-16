import React, {Component} from "react"

function IsFetching(props) {
    let {isFetching} = props

    if(isFetching) {
        return "Loading..."
    } else {
        return props.children
    }
}

export default IsFetching