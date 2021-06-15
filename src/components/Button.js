import PropTypes from 'prop-types'

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