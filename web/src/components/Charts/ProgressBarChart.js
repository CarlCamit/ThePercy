import React, { Component } from 'react'

import { LineChart, Line, XAxis, YAxis, Tooltip, ReferenceLine, Label, ResponsiveContainer } from 'recharts'

const series = [
  {name: 'Percy DeWolfe', data: [
          {bib: '0', dist: 338, time: 0},
          ]},
        {name: 'Cholena', data: [
          {bib: '1', dist: 0, time: 0},
          {bib: '1', dist: 100, time: 13},
          {bib: '1', dist: 150, time: 22}
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
          {bib: '3', dist: 17, time: 3},
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
          {bib: '5', dist: 22, time: 18},
          {bib: '5', dist: 21, time: 22},
          {bib: '5', dist: 331, time: 29}
        ]},
        {name: 'Matt', data: [
          {bib: '6', dist: 0, time: 0},
          {bib: '6', dist: 17, time: 3},
          {bib: '6', dist: 24, time: 28}
        ]},
        {name: 'Fholena', data: [
          {bib: '7', dist: 0, time: 0},
          {bib: '7', dist: 100, time: 13},
          {bib: '7', dist: 150, time: 22}
        ]},
        {name: 'Fretch', data: [
          {bib: '8', dist: 0, time: 0},
          {bib: '8', dist: 16, time: 12},
          {bib: '8', dist: 22, time: 18},
          {bib: '8', dist: 21, time: 22},
          {bib: '8', dist: 31, time: 29}
        ]},
        {name: 'Fannah', data: [
          {bib: '9', dist: 0, time: 0},
          {bib: '9', dist: 17, time: 3},
          {bib: '9', dist: 328, time: 28}
        ]},
          {name: 'Farl', data: [
          {bib: '10', dist: 0, time: 0},
          {bib: '10', dist: 100, time: 13},
          {bib: '10', dist: 150, time: 22}
        ]},
        {name: 'Fat', data: [
          {bib: '11', dist: 0, time: 0},
          {bib: '11', dist: 16, time: 12},
          {bib: '11', dist: 22, time: 18},
          {bib: '11', dist: 21, time: 22},
          {bib: '11', dist: 181, time: 29}
        ]},
        {name: 'Fatt', data: [
          {bib: '12', dist: 0, time: 0},
          {bib: '12', dist: 17, time: 3},
          {bib: '12', dist: 224, time: 28}
        ]},
        {name: 'Gat', data: [
          {bib: '13', dist: 0, time: 0},
          {bib: '13', dist: 16, time: 12},
          {bib: '13', dist: 22, time: 18},
          {bib: '13', dist: 21, time: 22},
          {bib: '13', dist: 231, time: 29}
        ]},
        {name: 'Gatt', data: [
          {bib: '14', dist: 0, time: 0},
          {bib: '14', dist: 17, time: 3},
          {bib: '14', dist: 24, time: 28}
        ]},
        {name: 'Gholena', data: [
          {bib: '15', dist: 0, time: 0},
          {bib: '15', dist: 100, time: 13},
          {bib: '15', dist: 150, time: 22}
        ]},
        {name: 'Ggretch', data: [
          {bib: '16', dist: 0, time: 0},
          {bib: '16', dist: 16, time: 12},
          {bib: '16', dist: 22, time: 18},
          {bib: '16', dist: 21, time: 22},
          {bib: '16', dist: 31, time: 29}
        ]},
        {name: 'Gannah', data: [
          {bib: '17', dist: 0, time: 0},
          {bib: '17', dist: 17, time: 3},
          {bib: '17', dist: 328, time: 28}
        ]},
          {name: 'Garl', data: [
          {bib: '18', dist: 0, time: 0},
          {bib: '18', dist: 100, time: 13},
          {bib: '18', dist: 150, time: 22}
        ]},
        {name: 'Hat', data: [
          {bib: '19', dist: 0, time: 0},
          {bib: '19', dist: 16, time: 12},
          {bib: '19', dist: 22, time: 18},
          {bib: '19', dist: 21, time: 22},
          {bib: '19', dist: 31, time: 29}
        ]},
        {name: 'Hatt', data: [
          {bib: '20', dist: 0, time: 0},
          {bib: '20', dist: 17, time: 3},
          {bib: '20', dist: 24, time: 28}
        ]},
      ];

class ProgressBarChart extends Component{
  render () {
    const payload = this.props;
  return (
    <div className="outer-wrapper">
     <h2>Race Progress</h2>
      <div className="area-chart-wrapper" style={{height: "500px"}}>
        <ResponsiveContainer>
          <LineChart width={300} height={300} margin={{top: 50, right: 30, left: 50, bottom: 100}}>
        

              <XAxis dataKey="dist" type="number" domain={[0, 320]} ticks={[80.4, 159.8, 239.2, 320]}>
                <Label value="Distance" offset={-15} position="insideBottom" />
              </XAxis>

              <YAxis type="category" dataKey="bib" name={payload.name} domain={[20, 0]}>
                <Label value="Name" angle={-90} offset={-15} position="insideLeft" style={{ textAnchor: 'middle' }} />
              </YAxis>
              
              {/* <Tooltip /> */}
            

                {series.map(s => (
                  <Line dataKey="bib" data={s.data} name={s.name} key={s.name} strokeWidth="13" dot={{strokeWidth: 1, r: 4}}/>
                ))}
            

              <ReferenceLine x={80.4} stroke="#FA5252" label={{ position: "top", value: "Fortymile", fontSize: '0.8em',  fill: "#FA5252", scaleToFit: true }} />
              <ReferenceLine x={159.8} stroke="#FA5252" label={{ position: "top", value: "Eagle", fontSize: '0.8em', fill: "#FA5252", scaleToFit: true }} />
              <ReferenceLine x={239.2} stroke="#FA5252" label={{ position: "top", value: "Fortymile", fontSize: '0.8em', fill: "#FA5252", scaleToFit: true }} />
              <ReferenceLine x={320} stroke="#FA5252" label={{ position: "top", value: "Finish Dawson", fontSize: '0.8em', fill: "#FA5252", scaleToFit: true }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
    )}
  }

export default ProgressBarChart