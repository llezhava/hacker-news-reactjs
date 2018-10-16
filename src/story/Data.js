import React, { Component } from "react";
import PropTypes from 'prop-types';

/*
 * 
 */
class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isFetching: true
    };
  }

  componentDidMount() {
      this.props.fetchData()
      .then(data => {
          this.setState({data, isFetching: false})
      })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.props.fetchData()
      .then(data => {
        this.setState({data, isFetching: false})
    })
    }
  }

  render() {
    const {isFetching} = this.state

    if(isFetching) {
      return <div>Loading...</div>
    }
    return <div>{this.props.element(this.state)}</div>;
  }
}

Data.prototype = {
    dataType: PropTypes.string.isRequired,
    data: PropTypes.func.isRequired
}

export default Data