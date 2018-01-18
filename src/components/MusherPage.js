import React, { Component } from 'react';
import MusherHistoryChart from '../components/MusherRaceHistory';
import MusherLineChart from './MusherLineChart';
import { getMushers, getMusher } from '../api/mushers';
import { getPastMushers } from '../api/pastmushers';
import ProfileCard from './ProfileCard';
import LineChart from './LineChart';
import { MusherInformation } from './MusherInformation';

class MusherPage extends Component {
  state = {
    musher_id: this.props.match.params.id,
    musher: null,
    mushers: null
  };

  componentDidMount() {
    getMusher(this.state.musher_id)
    .then(res => {
      this.setState({ musher: res[0] })
      
    })
    getPastMushers().then((res) => {
      this.setState({ mushers: [res] })
    })
    // getMushers()
    // .then(res => {
    //   this.setState({ mushers: res })
    // }).then(() => {
    //   let filteredMushers = this.state.mushers.filter(musher => (
    //     musher.musher_id === this.state.musher_id
    //   )
    // )
    // console.log(filteredMushers)
    // this.setState({ musher: filteredMushers })
    // console.log('musher state', this.state.musher)
    // })
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
        <MusherInformation {...this.props} data={this.state.mushers} />
      </div>
    )
  }
}

export default MusherPage