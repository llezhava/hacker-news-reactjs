import React, {Component} from "react"
import Card from "./Card"

class SingleItem extends Component {
    render() {
        return (
            <Card {...this.props} />
        )
    }
}