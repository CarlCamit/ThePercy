import React, { Component } from 'react';

import { getMusherByID } from '../api/mushers';
import { getPastMushers } from '../api/pastmushers';

import MusherHistoryChart from '../components/MusherRaceHistory';
import MusherLineChart from '../components/MusherLineChart';
import { ProfileCard } from '../components/ProfileCard';
import MusherInformation from '../components/MusherInformation';
import LineChart from '../components/LineChart';

export default class MusherPage extends Component {
  state = {
    musher: null,
  }

  componentDidMount() {
    getMusherByID(this.props.match.params.id)
    .then(res => {
      this.setState({ musher: res[0] })
      
    })
  }

  getImageAddress(musher) {
    const imageAddress = musher.profile_image.uri.split("//"); 
    const image = imageAddress[1];
    return image
  }

  render() {
    return (
    <div className="musher-page">
        { !!this.state.musher &&
        <div>
          <h1>{this.state.musher.musher}</h1>
          <div className="field">
            <ProfileCard src={ this.getImageAddress(this.state.musher) } />
          </div>
        </div>
        }
        <LineChart {...this.props} />
        <MusherHistoryChart />
        <MusherInformation id={this.props.match.params.id}/>
      </div>
    )
  }
}