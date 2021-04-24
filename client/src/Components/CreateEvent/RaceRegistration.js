import React from 'react'

import './RaceRegistration.css'

class RaceRegistration extends React.Component {
    render() {
        return(
            <div className='registration-info'>
                <h2>Race Registration Info</h2>
                <form>
                    <h3>Category:</h3>
                    <label for="pro">Pro</label>
                    <input type="checkbox" name="pro" value="pro" />
                    <label for="cat1">Category 1</label>
                    <input type="checkbox" name="cat1" value="cat1" />
                    <label for="cat2">Category 2</label>
                    <input type="checkbox" name="cat2" value="cat2" />
                    <label for="cat3">Category 3</label>
                    <input type="checkbox" name="cat3" value="cat3" />
                    <label for="cat4">Category 4</label>
                    <input type="checkbox" name="cat4" value="cat4" />
                    <label for="cat5">Category 5</label>
                    <input type="checkbox" name="cat5" value="cat5" />
                    <h3>Distance</h3>
                    <input type='number' name='race-distance-km' placeholder='Race distance in KM...'></input>
                    <label for='race-start-time'>Race start time...</label>
                    <input type='time' name='race-start-time'></input>
                    <input type='number' name='race-field-limit' placeholder='Race field limit...'></input>
                    <input type='number' name='race-fee' placeholder='Entry fee cost...'></input>
                </form>
            </div>
        )
    }
}

export default RaceRegistration