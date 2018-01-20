import React from 'react'

export const Searchbar = (props) => {
    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            props.handleSearchQuery(event.target.elements.search.value)
        }}>
            <input type='text' name='search' placeholder='Name' />
            <button type='submit'>Search</button>
        </form>
    )
}