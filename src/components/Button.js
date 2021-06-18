import PropTypes from 'prop-types'
import './css/Button.css'

const Button = ({ text, onClick }) => {
    return (
        <div>
            <button className='btn' onClick={onClick}>{text}</button>
        </div>
    );
}

Button.propTypes = {
    text: PropTypes.string
}

export default Button;