import React from 'react';
import PropType from 'prop-types';

const Input = ({ isRequired, label, onChangeHandler, type, value }) => {
    return (
        <div className="ceph__form-group">
            <input
                autoComplete="off"
                type={type}
                required={isRequired}
                value={value}
                onChange={onChangeHandler}
            />
            <label className="ceph__label-name">
                <span className="ceph__content-name">{label}</span>
            </label>
        </div>
    );
};

Input.propTypes = {
    isRequired: PropType.bool,
    label: PropType.string,
    onChangeHandler: PropType.func,
    type: PropType.string,
    value: PropType.string,
};

Input.defaultProps = {
    isRequired: false,
    label: '',
    onChangeHandler: () => {},
    type: 'text',
    value: '',
};

export default Input;
