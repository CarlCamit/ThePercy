import React, { Component } from 'react'
import ProgressBarChart from './ProgressBarChart';
import {compareObjectValues} from '../utils/compareObjectValues';


const currentSeries = [
  {name: 'Percy DeWolfe', data: [
          {bib: '0', dist: 338, time: 0},
          ]},
        {name: 'Cholena', data: [
          {bib: '1', dist: 0, time: 0},
          {bib: '1', dist: 100, time: 13},
          {bib: '1', dist: 166, time: 22}
        ]},
        {name: 'Gretch', data: [
          {bib: '2', dist: 0, time: 0},
          {bib: '2', dist: 16, time: 12},
          {bib: '2', dist: 22, time: 18},
          {bib: '2', dist: 21, time: 22},
          {bib: '2', dist: 338, time: 29}
        ]},
        {name: 'Hannah', data: [
          {bib: '3', dist: 0, time: 0},
          {bib: '3', dist: 99, time: 21},
          {bib: '3', dist: 224, time: 28}
        ]},
          {name: 'Carl', data: [
          {bib: '4', dist: 0, time: 0},
          {bib: '4', dist: 100, time: 13},
          {bib: '4', dist: 250, time: 22}
        ]},
        {name: 'Pat', data: [
          {bib: '5', dist: 0, time: 0},
          {bib: '5', dist: 16, time: 12},
          {bib: '5', dist: 29, time: 18},
          {bib: '5', dist: 131, time: 22},
          {bib: '5', dist: 331, time: 29}
        ]},
        {name: 'Matt', data: [
          {bib: '6', dist: 0, time: 0},
          {bib: '6', dist: 17, time: 3},
          {bib: '6', dist: 200, time: 28}
        ]},
        {name: 'Fholena', data: [
          {bib: '7', dist: 0, time: 0},
          {bib: '7', dist: 100, time: 13},
          {bib: '7', dist: 138, time: 22}
        ]},
        {name: 'Fretch', data: [
          {bib: '8', dist: 0, time: 0},
          {bib: '8', dist: 16, time: 12},
          {bib: '8', dist: 90, time: 18},
          {bib: '8', dist: 111, time: 22},
          {bib: '8', dist: 200, time: 29}
        ]},
        {name: 'Fannah', data: [
          {bib: '9', dist: 0, time: 0},
          {bib: '9', dist: 86, time: 9},
          {bib: '9', dist: 328, time: 28}
        ]},
          {name: 'Farl', data: [
          {bib: '10', dist: 0, time: 0},
          {bib: '10', dist: 136, time: 13},
          {bib: '10', dist: 170, time: 22}
        ]},
        {name: 'Fat', data: [
          {bib: '11', dist: 0, time: 0},
          {bib: '11', dist: 106, time: 12},
          {bib: '11', dist: 202, time: 18},
          {bib: '11', dist: 215, time: 22},
          {bib: '11', dist: 319, time: 29}
        ]},
        {name: 'Fatt', data: [
          {bib: '12', dist: 0, time: 0},
          {bib: '12', dist: 14, time: 3},
          {bib: '12', dist: 224, time: 28}
        ]},
        {name: 'Gat', data: [
          {bib: '13', dist: 0, time: 0},
          {bib: '13', dist: 16, time: 12},
          {bib: '13', dist: 29, time: 18},
          {bib: '13', dist: 52, time: 22},
          {bib: '13', dist: 231, time: 29}
        ]},
        {name: 'Gatt', data: [
          {bib: '14', dist: 0, time: 0},
          {bib: '14', dist: 17, time: 3},
          {bib: '14', dist: 204, time: 28}
        ]},
        {name: 'Gholena', data: [
          {bib: '15', dist: 0, time: 0},
          {bib: '15', dist: 79, time: 13},
          {bib: '15', dist: 142, time: 22}
        ]},
        {name: 'Ggretch', data: [
          {bib: '16', dist: 0, time: 0},
          {bib: '16', dist: 16, time: 12},
          {bib: '16', dist: 22, time: 18},
          {bib: '16', dist: 221, time: 22},
          {bib: '16', dist: 301, time: 29}
        ]},
        {name: 'Gannah', data: [
          {bib: '17', dist: 0, time: 0},
          {bib: '17', dist: 107, time: 3},
          {bib: '17', dist: 328, time: 28}
        ]},
          {name: 'Garl', data: [
          {bib: '18', dist: 0, time: 0},
          {bib: '18', dist: 68, time: 13},
          {bib: '18', dist: 193, time: 22}
        ]},
        {name: 'Hat', data: [
          {bib: '19', dist: 0, time: 0},
          {bib: '19', dist: 16, time: 12},
          {bib: '19', dist: 22, time: 18},
          {bib: '19', dist: 89, time: 22},
          {bib: '19', dist: 312, time: 29}
        ]},
        {name: 'Hatt', data: [
          {bib: '20', dist: 0, time: 0},
          {bib: '20', dist: 66, time: 3},
          {bib: '20', dist: 240, time: 28}
        ]},
      ];


const generateKeyArray = (data, filterKey) => {
  let countArray = []
  currentSeries.forEach((datum) => {
      if (countArray.every((object) => (object[filterKey] !== datum[filterKey]))) {
          countArray = [ ...countArray, { [filterKey]: datum[filterKey] } ]
      }
  })
  return countArray
}

const generateDataStructure = (data, id, key) => {
  let dataArray = []
  currentSeries.forEach((datum) => {
      if (datum[key] === id) {
          return dataArray = [ ...dataArray, { name: datum.name, distance: (datum.run_dist/1000),  bib: datum.bib  } ];
      }
  })
  return dataArray
}

const generateData = (series, key) => {
  let filteredData = generateKeyArray(series, key)
  filteredData = filteredData.map((object) => {
          return object = Object.assign({}, object, { series: generateDataStructure(series, object[key], key)} )
  })
  return filteredData 
}

const ProgressBarData = (props) => {

  // console.log(generatingData(mySeries, props.match.params.id, 'musher_id'))
  console.log("check data",generateData(currentSeries, 'musher_id'))

  return (
      <div>
          <ProgressBarChart data={generateData(currentSeries, "musher_id")} />
      </div>
  )
}

export default ProgressBarData