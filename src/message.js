import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'


export default class Message extends Component {
  render() {

    return (
      <div class="ui warning message">
  <span id="no">
  <div class="headerM">
    <b>There is an error in your input:  </b>
  </div>

  Please check the following fields:
  <ul>
  </ul>
  </span>
  <span id="yes">
    A new registry has been added to GoogleSheets!
  </span>
</div>
    )
    
  }

}
