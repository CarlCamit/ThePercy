import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import Dashboard from '../containers/Dashboard'
import { Header } from './Header/index'
import Historical from '../containers/Historical'
import MapPage from '../containers/MapPage'
import MusherPage from '../containers/MusherPage'
import MushersPage from '../containers/MushersPage'
import StatisticsPage from '../containers/StatisticsPage'

export const PrimaryLayout = (props) => {
  return (
    <div className='main-container'>
      <Header />
      <Switch>
        <Route path='/tracker' component={MapPage}/>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/pastraces' component= {Historical} />
        <Route path='/statistics' component={StatisticsPage} />
        <Route path='/mushers/:id' component={MusherPage} />
        <Route path='/mushers' component={MushersPage} />
        <Redirect to='/tracker'  />
      </Switch>
    </div>
  )
}