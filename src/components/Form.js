const Form = () => {
    return (
        <div>
            <form className='form'>
                <div className='form-control'>
                    <label htmlFor='zipcode'>Enter your zipcode to find your growing zone</label>
                    <input 
                        type='text'
                        placeholder='Enter zipcode'
                        name='zipcode'
                    />
                </div>
            </form>
        </div>
    );
}

export default Form; 