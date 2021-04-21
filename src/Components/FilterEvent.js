import React from 'react'

import './FilterEvent.css'

class FilterEvent extends React.Component {
    render() {
        return (
            <div className='filter-events'>
                <h3>Filter Events</h3>
                <div className='filter-input'>
                    <select placeholder='Select Event Type...'>
                        <option>Road Race</option>
                        <option>Gravel Race</option>
                        <option>Cyclocross</option>
                        <option>Track Race</option>
                        <option>Criterium</option>
                    </select>
                </div>
                <div className='filter-input'>
                    <input name='filter-event-name' placeholder='Event Name...'></input>
                </div>
                <div className='filter-input'>
                    <input name='filter-event-state' placeholder='State...'></input>
                </div>
                <div className='filter-input'>
                    <input name='filter-event-city' placeholder='City...'></input>
                </div>
                <div className='filter-input'>
                    <button type='filter-button'>Submit</button>
                </div>
            </div>
        )
    }
}

export default FilterEvent