import React, { Component } from 'react'

import { getPastMusherByID } from '../api/pastmushers'

import { deduplicateAndCountObjectByKey } from '../utils/deduplicateAndCountObjectByKey'
import { compareObjectValues } from '../utils/compareObjectValues'

export default class MusherInformation extends Component {
    
    state = {
        data: null
    }
    
    getCountByObjectKey = (data, id, raceFilter, countName='count') => {
        let countArray = deduplicateAndCountObjectByKey(data.filter((datum) => (datum.race === raceFilter)), 'musher', `${countName}`, 'name')
        return countArray
    }
    
    getHighestPlacing = (data, id) => {
        let highestPlacing = data.filter((datum) => datum.standing === '1').slice().sort(compareObjectValues('run_time')).slice(0, 1)
        return highestPlacing
    }
    
    getFastestTimes = (data, id) => {
        let fastestTime = data.slice().sort(compareObjectValues('run_time')).slice(0, 1)
        return fastestTime
    }
    
    generateMusherInformation = (data, id) => (
        <div>
            <span>Total Number of Percy Races Ran: {this.getCountByObjectKey(data, id, 'Percy', 'races')[0].races}</span>
            <span>Total Number of Percy Junior Races Ran: {this.getCountByObjectKey(data, id, 'Percy Junior', 'races')[0].races}</span>
            <span>Highest Placing: {this.getHighestPlacing(data, id)[0].standing}</span>
            <span>Fastest Time: {this.getFastestTimes(data, id)[0].run_time}</span>
        </div>
    )

    componentDidMount() {
        getPastMusherByID(this.props.id).then((res) => {
            this.setState({ data: res })
        })
    }

    render() {
        return (
            <div>
                {!!this.state.data && this.generateMusherInformation(this.state.data, this.props.id)}
            </div>
        )
    }
}