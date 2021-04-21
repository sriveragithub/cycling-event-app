import React from 'react'
import RaceRegistration from './RaceRegistration'

import './CreateEvent.css'

class CreateEvent extends React.Component {
    render() {

        let today = new Date().toISOString().split('T')[0]

        return (
            <div className='create-form'>
                <h2>Create Your Event!</h2>
                <form>
                    <h3>Event Basics</h3>
                    <input name='event-title' placeholder='Title of your event...'></input>
                    <select placeholder='Event Type...'>
                        <option>Road Race</option>
                        <option>Gravel Race</option>
                        <option>Cyclocross</option>
                        <option>Track Race</option>
                        <option>Criterium</option>
                    </select>
                    <h3>Event Locations</h3>
                    <input name='event-addr1' placeholder='Street address 1...'></input>
                    <input name='event-addr2' placeholder='Street address 2...'></input>
                    <input name='event-city' placeholder='City...'></input>
                    <input name='event-state' placeholder='State...'></input>
                    <input type='number' name='event-zip' placeholder='Zip...'></input>
                    <h3>Event Dates</h3>
                    <input type='date' name='event-start' min={today} />
                    <h3>Event Contact Info</h3>
                    <input name='event-website' placeholder='Event website URL...'></input>
                    <input type='phone' name='event-phone' placeholder='Event primary contact phone #...'></input>
                    <input type='email' name='event-email' placeholder='Event primary contact email address...'></input>
                    <h3>Sanctioning Info</h3>
                    <select placeholder='Event sanctioning body...'>
                        <option>USA Cycling</option>
                        <option>CyclingBC</option>
                        <option>NABRA</option>
                        <option>NACS</option>
                        <option>EFTS</option>
                        <option>Unsanctioned</option>
                    </select>
                    <input name='event-permit-num' placeholder='Event permit # (if applicable)...'></input>
                    <RaceRegistration />
                </form>
            </div>
        )
    }
}

export default CreateEvent