import Button from './Button';
import './css/Form.css';
import { IconContext } from 'react-icons'
import { FaSearch } from 'react-icons/fa'

const Form = ({ displayData, zipCode, onChange }) => {
  
    return (
        <div className='form-container'>
            <form className='form'>
                <div className='form-control'>
                    <label className='form-label' htmlFor='zipcode'>Enter your zip code to find your plant hardiness zone<span className="asterisk">*</span></label>
                    <div class="form-items">
                        <div className='form-input-container'>
                            <IconContext.Provider value={{className: 'icon-search'}}>
                                <FaSearch size="1.4em" />
                            </IconContext.Provider>
                            <input
                                className='form-input' 
                                type='text'
                                placeholder='Enter US zip code'
                                name='zipcode'
                                value={zipCode}
                                onChange={onChange}
                                autoComplete='off'
                            />
                        </div>
                        
                        <Button text='Find My Zone' onClick={displayData}/>
                    </div>   
                    <p class="note"><span class="asterisk">*</span>Please note that information is not currently available for all US zip codes</p>
                </div>
            </form>
        </div>
    );
}

export default Form; 