import React, { Component } from 'react'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ReferenceLine, Label, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import { getPastMushers } from '../api/pastmushers';
import {compareObjectValues} from '../utils/compareObjectValues';
import { updates } from '../api/updates';
  
const renderLegend = () => {
  return (
    <div style={{
    color: "#191919",
    display: "inline-block",
    padding: "0.3rem 0.3rem",
}}>
    <p style={{
        padding: "0.3rem 0.3rem",
        textAnchor: "middle",
        fontSize: "0.6rem",
        textAlign: "center",
        fontWeight: "bold"
    }}>Legend</p>
    <p style={{
        backgroundColor: "#3d5941",
        color: "#fff",
        padding: "0.3rem 0.3rem",
        textAnchor: "middle",
        fontSize: "0.6rem",
        textAlign: "center"
    }}>Rookie</p>
    <p style={{
        textAlign: "center",
        color: "#fff",
        backgroundColor: "#b5b991",
        fontSize: "0.6rem",
        padding: "0.3rem 1.3rem",
        textAnchor: "middle",
        margin: "0.1rem"
    }}>Vetran</p>
</div>
)
}

/*

const determineExperience = (data, id) => {
  let vetranMushers = data.some((datum) => datum.musher_id === id)
  let years = generateYearsArray()
    filteredArray.map((musher) => {
      return years = years.map((year) => {
        if (year.year === musher.year) {
            year = Object.assign({}, year, { [musher.race]: parseFloat((musher.run_time).replace(/:/gi, '.')) })
        }
        return year
    })
    })
  return vetranMushers
}
*/

const getNameForMusherId = (musher_id) => {
  let musher_name = ''
  musher_id.map(fromApi => {
    if (fromApi.musher_id === musher_id) {
      musher_name = fromApi.musher_id
    }
    return musher_name
  })
  return musher_name
}

 const CustomTooltip =() => {
  /*const { active } = this.props;

  if (active) {
    const { payload, label, name } = this.props;
    return (
      console.log(payload),
      <div className="custom-tooltip">
      <p className="label"> { ` Bib (${payload[0].value}), Distance: ${label}, Time: ${payload[0].payload.time} `}</p>  
      </div>
    );
  }
  return null;
  */
}


export const ProgressBarChart = (props) => {
  //const payload = this.props;
  return (
    <div  className="area-chart-wrapper" 
          style={{ width: '95%', height: "500px", backgroundColor: "#f8f8f8", border: "1px solid black", margin: "10px" }} 
          display= "inline-block">
    <h2>Musher Progress</h2>
      <ResponsiveContainer>
        <LineChart 
          width={300} 
          height={300} 
          margin={{top: 50, right: 30, left: 50, bottom: 100}}>
       

            <XAxis 
              dataKey="dist" 
              type="number" 
              type="number" 
              domain={[0, 320]} 
              ticks={[80.4, 159.8, 239.2, 320]}>
                <Label 
                  value="Distance" 
                  offset={-15} 
                  position="insideBottom" />
            </XAxis>

            <YAxis 
              type="category" 
              dataKey="bib"  
              domain={[20, 0]}>
                <Label 
                  value="Name" 
                  angle={-90} 
                  offset={-15} 
                  position="insideLeft" 
                  style={{ textAnchor: 'middle' }} />
             </YAxis>
            
             <Tooltip 
              viewBox={{ x: 0, y: 0, width: 200, height: 400 }} 
              content={<CustomTooltip/>}/>
          
          {props.data.map((s) => (
              <Line 
                {...props} 
                dataKey="distance" 
                data={s.data.slice().sort(compareObjectValues("time"))}
                name={s.musher_name} 
                key={s.musher_id} 
                strokeWidth="13" 
                dot={{strokeWidth: 1, r: 4}}
              />
          ))}
          
            <ReferenceLine x={80.4} stroke="#FA5252" label={{ position: "top", value: "Fortymile", fontSize: '0.8em',  fill: "#FA5252", scaleToFit: true }} />
            <ReferenceLine x={159.8} stroke="#FA5252" label={{ position: "top", value: "Eagle", fontSize: '0.8em', fill: "#FA5252", scaleToFit: true }} />
            <ReferenceLine x={239.2} stroke="#FA5252" label={{ position: "top", value: "Fortymile", fontSize: '0.8em', fill: "#FA5252", scaleToFit: true }} />
            <ReferenceLine x={320} stroke="#FA5252" label={{ position: "top", value: "Finish Dawson", fontSize: '0.8em', fill: "#FA5252", scaleToFit: true }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
    )}