import Button from './Button'

const Form = ({ displayData, zipCode, onChange }) => {
  
    return (
        <div className='form-container'>
            <form className='form'>
                <div className='form-control'>
                    <label className='form-label' htmlFor='zipcode'>Enter your zip code to find your plant hardiness zone</label>
                    <input 
                        type='text'
                        placeholder='Enter US zip code'
                        name='zipcode'
                        value={zipCode}
                        onChange={onChange}
                        autoComplete='off'
                    />
                    <Button text='Find My Zone' onClick={displayData}/>
                </div>
            </form>
        </div>
    );
}

export default Form; 