import PropTypes from 'prop-types'

const Button = ({ text }) => {
    return (
        <div>
            <button className='btn'>{text}</button>
        </div>
    );
}

Button.propTypes = {
    text: PropTypes.string
}

export default Button;