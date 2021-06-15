import Button from './Button'

const Form = () => {
    return (
        <div className="form-container">
            <form className='form'>
                <div className='form-control'>
                    <label htmlFor='zipcode'>Enter your zipcode to find your growing zone</label>
                    <input 
                        type='text'
                        placeholder='Enter zipcode'
                        name='zipcode'
                    />
                    <Button text='Find My Zone' />
                </div>
            </form>
        </div>
    );
}

export default Form; 