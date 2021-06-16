import Button from './Button'

const Form = ({ onClick, zipCode, onChange }) => {
  
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
                        onChange={onChange}
                    />
                    <Button text='Find My Zone' onClick={onClick}/>
                </div>
            </form>
        </div>
    );
}

export default Form; 