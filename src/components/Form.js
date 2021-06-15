import { useState } from 'react'
import Button from './Button'

const Form = () => {
    // Declare a new state variable, zipCode, that is linked to input value
    const [zipCode, setZipCode] = useState('');
    
    // function for checking zip code format
    const isCorrectZipCodeFormat = (zipcode) => {
        const regexpFiveDigit = /^[0-9]{5}$/;
        return regexpFiveDigit.test(zipcode) ;
    }

    // function for getting zone data
    const getZoneData = async (zipcode) => {
        try {
            // make 'GET' request to API phzmapi.org
            const response = await fetch(`https://phzmapi.org/${zipcode}.json`);
            
            // check if response is successful (ok)
            if (!response.ok) {
                // throw error if response not ok
                throw new Error(response.status);
            }
            // convert Response object to JSON 
            const zoneData = await response.json();
            
            // log zoneData
            console.log(zoneData.zone);
            return zoneData.zone;
        } catch (error) {
            console.log(error)
            alert(`${error} : No data found for this zip code entry (${zipCode})`);
        }
    }
    
    // function for retrieving & displaying zone data
    const onClick = (event) => {
        event.preventDefault(); // prevents submission to a page
        console.log(`Clicked`, {zipCode});
        console.log('result', isCorrectZipCodeFormat(zipCode));
        // validate zip code format
        if (!(isCorrectZipCodeFormat(zipCode))) {
            alert('Please enter a 5 digit zip code');
            return;
        }

        // get zoneData
        getZoneData(zipCode);
    }

    return (
        <div className='form-container'>
            <form className='form'>
                <div className='form-control'>
                    <label htmlFor='zipcode'>Enter your zipcode to find your growing zone</label>
                    <input 
                        type='text'
                        placeholder='Enter zipcode'
                        name='zipcode'
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                    />
                    <Button text='Find My Zone' onClick={onClick}/>
                </div>
            </form>
        </div>
    );
}

export default Form; 