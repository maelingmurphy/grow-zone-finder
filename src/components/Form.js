import Button from './Button';
import './css/Form.css';
import { IconContext } from 'react-icons'
import { FaSearch } from 'react-icons/fa'

const Form = ({ displayData, zipCode, onChange }) => {
  
    return (
        <div className='form-container'>
            <form className='form'>
                <div className='form-control'>
                    <p className="form-label">Enter your zip code to find your plant hardiness zone<span className="asterisk">*</span></p>
                    <p class="note">Information not available for all US zip codes</p>

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
                                title="Enter zip code"
                            />
                        </div>
                        
                        <Button text='Find My Zone' onClick={displayData}/>
                    </div>   
                </div>
            </form>
        </div>
    );
}

export default Form; 