import React, { Component } from 'react'

export default class MapPage extends Component {
  render() {
    return (
      <div className='map-page'>
        <iframe src="http://www.thepercy.com/tracker/" title="Map"></iframe>
      </div>
    )
  }
}