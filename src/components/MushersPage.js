import React, { Component } from 'react'

import { getMushers } from '../api/mushers'

import { Results } from '../components/Results'
import { SearchFilterContainer } from '../components/SearchFilterContainer'

import { filterResults } from '../utils/filterResults'

export default class MushersPage extends Component {
    state = {
        data: null,
        year: 'Year',
        race: 'Race',
        searchQuery: null,
    }
  
    handleSearchQuery = (query) => {
        this.setState({ searchQuery: query })
    }

    handleYearSelection = (year) => {
        this.setState({ year: year })
    }

    handleRaceSelection = (race) => {
        this.setState({ race: race })
    }

    componentDidMount = () => {
        getMushers().then((res) => 
            this.setState({ data: res })
        )
    }
  
    render = () => {
        return (
            <div className='mushers-page'>
                <p>Mushers Page</p>
                <SearchFilterContainer handleSearchQuery={this.handleSearchQuery} handleYearSelection={this.handleYearSelection} handleRaceSelection={this.handleRaceSelection} />
                {!!this.state.data && <Results data={filterResults(this.state.data, this.state.year, this.state.race, this.state.searchQuery)} />}
            </div>
        )
    }
}


