import React from 'react'

import { deduplicateAndCountObjectByKey } from '../utils/deduplicateAndCountObjectByKey'
import { compareObjectValues } from '../utils/compareObjectValues'

const getCountByObjectKey = (data, id, raceFilter, countName='count') => {
    let countArray = deduplicateAndCountObjectByKey(data.filter((datum) => (datum.musher_id === id && datum.race === raceFilter)), 'musher', `${countName}`, 'name')
    return countArray
}

const getHighestPlacing = (data, id) => {
    let highestPlacing = data.filter((datum) => datum.musher_id === id && datum.standing === '1').slice().sort(compareObjectValues('run_time')).slice(0, 1)
    return highestPlacing
}

const getFastestTimes = (data, id) => {
    let fastestTime = data.filter((datum) => datum.musher_id === id).slice().sort(compareObjectValues('run_time')).slice(0, 1)
    return fastestTime
}

const generateMusherInformation = (data, id) => (
    <div>
        <span>Total Number of Percy Races Ran: {getCountByObjectKey(data, id, 'Percy', 'races')[0].races}</span>
        <span>Total Number of Percy Junior Races Ran: {getCountByObjectKey(data, id, 'Percy Junior', 'races')[0].races}</span>
        <span>Highest Placing: {getHighestPlacing(data, id)[0].standing}</span>
        <span>Fastest Time: {getFastestTimes(data, id)[0].run_time}</span>
    </div>
)

export const MusherInformation = (props) => {
    return (
        <div>
            {!!props.data && generateMusherInformation(props.data[0], props.match.params.id)}
        </div>
    )
}