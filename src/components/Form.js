import Button from './Button';
import './css/Form.css';

const Form = ({ displayData, zipCode, onChange }) => {
  
    return (
        <div className='form-container'>
            <form className='form'>
                <div className='form-control'>
                    <label className='form-label' htmlFor='zipcode'>Enter your zip code to find your plant hardiness zone<span className="asterisk">*</span></label>
                    <input
                        className='form-input' 
                        type='text'
                        placeholder='Enter US zip code'
                        name='zipcode'
                        value={zipCode}
                        onChange={onChange}
                        autoComplete='off'
                    />
                    <Button text='Find My Zone' onClick={displayData}/>
                    <p class="note"><span class="asterisk">*</span>Please note that information is not currently available for all US zip codes</p>
                </div>
            </form>
        </div>
    );
}

export default Form; 