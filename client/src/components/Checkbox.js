import React from 'react';

const Checkbox = ({ label, onChangeHandler, value }) => {
    return (
        <label className="ceph__checkbox-container">
            {label}
            <input className="ceph__checkbox" onChange={onChangeHandler} type="checkbox" checked={value} />
            <span className="ceph__checkmark"></span>
        </label>
    )
};

export default Checkbox;
