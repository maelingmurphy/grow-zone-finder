import { useState } from 'react'
import Button from './Button'

const Form = () => {
    
    const [zipCode, setZipCode] = useState('');
    
    // onClick function for retrieving zone data
    const onClick = (event) => {
        event.preventDefault(); // prevents submission to a page
        console.log(`Clicked`, {zipCode});
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