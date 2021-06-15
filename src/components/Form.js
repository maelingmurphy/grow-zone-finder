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
    
    // function for retrieving zone data
    const onClick = (event) => {
        event.preventDefault(); // prevents submission to a page
        console.log(`Clicked`, {zipCode});
        console.log('result', isCorrectZipCodeFormat(zipCode));
        // validate zip code format
        if (!(isCorrectZipCodeFormat(zipCode))) {
            alert('Please enter a 5 digit zip code');
            return;
        }
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