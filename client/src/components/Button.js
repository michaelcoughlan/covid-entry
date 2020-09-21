import React from 'react';
import PropType from 'prop-types';

const Button = ({ clickHandler, disabled, text }) => {
    return (
        <button 
            className="ceph__btn"
            onClick={clickHandler}
            disabled={disabled}
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    clickHandler: PropType.func,
    disabled: PropType.bool,
    text: PropType.string,
};

Button.defaultProps = {
    clickHandler: () => {},
    disabled: false,
    text: 'SUBMIT',
};

export default Button;