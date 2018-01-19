import React, { Component } from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer, Label} from 'recharts'
import {compareObjectValues} from '../utils/compareObjectValues';


const series = [
  {name: 'Cho', data: [
    {time: '0', dist: 0 },
    {time: '30', dist: 152.7},
    {time: '50', dist: 338}
  ]},
  {name: 'Hannah', data: [
    {time: '0', dist: 0 },
    {time: '30', dist: 152.7},
    {time: '45', dist: 338}
  ]},
  {name: 'Carl', data: [
    {time: '0', dist: 0 },
    {time: '13', dist: 12.4},
    {time: '18', dist: 25.7},
    {time: '28', dist: 137.8 },
    {time: '30', dist: 145.8},
    {time: '45', dist: 338}
  ]},
  {name: 'Gretchen', data: [
    {time: '0', dist: 0 },
    {time: '15', dist: 7.4},
    {time: '50', dist: 338}
  ]},
];

const RenderLegend = () => {
  return <div style={{
    color: "#191919",
    display: "inline-block",
    padding: "0.3rem 1.2rem",
  }}>
  <p style={{
    padding: "0.3rem 1.2rem",
    textAnchor: "middle",
    margin: "0",
    fontSize: "0.8rem",
    textAlign: "center",
    fontWeight: "bold"
  }}>Legend</p>
  <p style={{
    backgroundColor: "#5f4b8b",
    color: "#fff",
    padding: "0.25rem 0.6rem",
    margin: "0.05rem",
    textAnchor: "middle",
    fontSize: "0.4rem",
    textAlign: "center"
  }}>Cho</p>
  <p style={{
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#88b04b",
    fontSize: "0.4em",
    padding: "0.25rem 0.6rem",
    textAnchor: "middle",
    margin: "0.05rem"
  }}>Hannah</p>
  <p style={{
    backgroundColor: "#91a8d0",
    color: "#fff",
    padding: "0.25rem 0.6rem",
    margin: "0.05rem",
    textAnchor: "middle",
    fontSize: "0.4rem",
    textAlign: "center"
  }}>Carl</p>
  <p style={{
    backgroundColor: "#964f4c",
    color: "#fff",
    padding: "0.25rem 0.6rem",
    margin: "0.05rem",
    textAnchor: "middle",
    fontSize: "0.4rem",
    textAlign: "center"
  }}>Gretchen</p>
  <p style={{
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#ad5e99",
    fontSize: "0.4rem",
    padding: "0.25rem 0.6rem",
    textAnchor: "middle",
    margin: "0.05rem"
  }}>George</p>
  <p style={{
    backgroundColor: "#009473",
    color: "#fff",
    padding: "0.25rem 0.6rem",
    margin: "0.05rem",
    textAnchor: "middle",
    fontSize: "0.4rem",
    textAlign: "center"
  }}>Julia</p>
   <p style={{
    backgroundColor: "#dd4124",
    color: "#fff",
    padding: "0.25rem 0.6rem",
    margin: "0.05rem",
    textAnchor: "middle",
    fontSize: "0.4rem",
    textAlign: "center"
  }}>Nick</p>
  </div>
}

const NameColor = [
  {name: "Cho", lineColor: "#5f4b8b"},
  {name: "Hannah", lineColor: "#88b04b"},
  {name: "Carl", lineColor: "#91a8d0"},
  {name: "Gretchen", lineColor: "#964f4c"},
  {name: "George", lineColor: "#ad5e99"},
  {name: "Julia", lineColor: "#009473"},
  {name: "Nick", lineColor: "#dd4124"}
]


const currentSeries = [
    {
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 157683,
        "run_time_str": "19.15.12",
        "hours": 19.25
    },
    {
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 80860,
        "run_time_str": "06.04.23",
        "hours": 6.07
    },
    {
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 157683,
        "run_time_str": "19.05.13",
        "hours": 19.09
    },
    {
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 80677,
        "run_time_str": "05.34.21",
        "hours": 5.57
    },
    {
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 157683,
        "run_time_str": "18.55.19",
        "hours": 18.92
        },
        {
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 120582,
        "run_time_str": "10.34.13",
        "hours": 10.57
        },
        {
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 157683,
        "run_time_str": "18.43.46",
        "hours": 18.73
        },
        {
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 80862,
        "run_time_str": "07.34.27",
        "hours": 7.57
        },
        {
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 157683,
        "run_time_str": "18.45.50",
        "hours": 18.76
        },
        {
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 80841,
        "run_time_str": "05.54.24",
        "hours": 5.91
        },
        {
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 157683,
        "run_time_str": "18.33.43",
        "hours": 18.56
        },
        {
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 77597,
        "run_time_str": "05.24.21",
        "hours": 5.41
        },
        {
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 157683,
        "run_time_str": "18.23.44",
        "hours": 18.4
        },
    {
        "event_id": "119",
        "musher_id": "106",
        "run_dist": 197683,
        "run_time_str": "19.15.12",
        "hours": 19.25
    },
    {
        "event_id": "119",
        "musher_id": "106",
        "run_dist": 90860,
        "run_time_str": "06.04.23",
        "hours": 6.07
    },
    {
        "event_id": "119",
        "musher_id": "106",
        "run_dist": 197683,
        "run_time_str": "19.05.13",
        "hours": 19.09
    },
    {
        "event_id": "119",
        "musher_id": "106",
        "run_dist": 90677,
        "run_time_str": "05.34.21",
        "hours": 5.57
    },
    {
        "event_id": "119",
        "musher_id": "106",
        "run_dist": 187683,
        "run_time_str": "18.55.19",
        "hours": 18.92
        },
        {
        "event_id": "119",
        "musher_id": "106",
        "run_dist": 130582,
        "run_time_str": "10.34.13",
        "hours": 10.57
        },
        {
        "event_id": "119",
        "musher_id": "106",
        "run_dist": 147683,
        "run_time_str": "18.43.46",
        "hours": 18.73
        },
        {
        "event_id": "119",
        "musher_id": "106",
        "run_dist": 90862,
        "run_time_str": "07.34.27",
        "hours": 7.57
        },
        {
        "event_id": "119",
        "musher_id": "106",
        "run_dist": 147683,
        "run_time_str": "18.45.50",
        "hours": 18.76
        },
        {
        "event_id": "119",
        "musher_id": "106",
        "run_dist": 90841,
        "run_time_str": "05.54.24",
        "hours": 5.91
        },
        {
        "event_id": "119",
        "musher_id": "106",
        "run_dist": 187683,
        "run_time_str": "18.33.43",
        "hours": 18.56
        },
        {
        "event_id": "119",
        "musher_id": "106",
        "run_dist": 87597,
        "run_time_str": "05.24.21",
        "hours": 5.41
        },
        {
        "event_id": "119",
        "musher_id": "106",
        "run_dist": 187683,
        "run_time_str": "18.23.44",
        "hours": 18.4
        }
]


const generateKeyArray = (data, filterKey) => {
  let countArray = []
  data.forEach((datum) => {
      if (countArray.every((object) => (object[filterKey] !== datum[filterKey]))) {
          countArray = [ ...countArray, { [filterKey]: datum[filterKey] } ]
      }
  })
  return countArray
}

    const generateDataStructure = (data, id, key) => {
        let dataArray = []
        data.forEach((datum) => {
            if (datum[key] === id) {
                return dataArray = [ ...dataArray, { distance: (datum.run_dist/1000), time: datum.hours } ];
            }
        })
        return dataArray
    }

    const generateData = (data, key) => {
      let filteredData = generateKeyArray(data, key)
      filteredData = filteredData.map((object) => {
        return object = Object.assign({}, object, { data: generateDataStructure(data, object[key], key)} )
      })
      return filteredData 
  }
  
 export const DashboardLineChartData = (props) => {
  	return (

      <div className="Line-chart-wrapper" style={{ width: "45%", height: "400px", backgroundColor: "#f8f8f8", border: "1px solid black", margin: "10px" }}>
      <ResponsiveContainer padding="1rem">
        <LineChart  data={generateData(currentSeries, "musher_id")} width={300} height={300} margin={{top: 30, right: 30, left: 50, bottom: 50} }>
          <CartesianGrid strokeDasharray="3 3" horizontal={false}/>
          <XAxis dataKey="time" type="number" domain={[0, 50]}  ticks={[10, 20, 30, 40, 50]}>
            <Label name={['Time (hours)']} offset={-45} position="insideBottom" />
          </XAxis>
          <YAxis  dataKey="dist"  type="number"  allowDuplicatedCategory={false} domain={[0, 320]} ticks={[80.4, 159.8, 239.2, 320]} >
            <Label name={['Distance (km)']} angle={-90} offset={-10} position="insideLeft" style={{ textAnchor: 'middle' }}/> 
          </YAxis>
          <Tooltip/>
          <Legend layout="vertical" verticalAlign="bottom" align="left" content={RenderLegend} />
          {series.map(s => (
            <Line dataKey="dist" data={s.data} name={s.name} key={s.name} type="natural"/> 
          ))}
          {NameColor.map(name => (
             <Line key={name.name} stroke={name.lineColor} name={name.name} strokeWidth="2" />
          ))}
            <ReferenceLine y={80.4} stroke="#FA5252" label={{ position: "top", value: "Fortymile", fontSize: '0.8em',  fill: "#FA5252", scaleToFit: true }} />
            <ReferenceLine y={159.8} stroke="#FA5252" label={{ position: "top", value: "Eagle", fontSize: '0.8em', fill: "#FA5252", scaleToFit: true }} />
            <ReferenceLine y={239.2} stroke="#FA5252" label={{ position: "top", value: "Fortymile", fontSize: '0.8em', fill: "#FA5252", scaleToFit: true }} />
            <ReferenceLine y={320} stroke="#FA5252" label={{ position: "top", value: "Finish Dawson", fontSize: '0.8em', fill: "#FA5252", scaleToFit: true }} />
        </LineChart>
      </ResponsiveContainer>
      </div>
    )}
    export default DashboardLineChartData