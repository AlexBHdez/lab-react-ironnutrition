import React, { Component } from "react"




class Today extends Component {


  render() {

    return (
      <ul>
        <li> {this.props.q}  {this.props.name} = {this.props.cal} calories  </li>
      </ul>
    )
  }

}

export default Today