import React, { useState } from 'react';
import Button from './Button';
import api from '../consts/api';

const Form = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const isFormValid = () => !name || !phoneNumber || !email;

    const handleFormSubmission = (event) => {
        event.preventDefault();

        api.post('entries', { name, email, phoneNumber }).then(res => console.log(res));
    };

    return (
        <div className="ceph__form-container">
            <form className="ceph__form">
                <div className="ceph__form-group">
                    <input type="text" name="name" required autoComplete="off" value={name} onChange={(event) => setName(event.target.value)} />
                    <label className="ceph__label-name" htmlFor="name">
                        <span className="ceph__content-name">Name</span>
                    </label>
                </div>

                <div className="ceph__form-group">
                    <input type="text" name="email" required autoComplete="off" value={email} onChange={(event) => setEmail(event.target.value)} />
                    <label className="ceph__label-name" htmlFor="name">
                        <span className="ceph__content-name">Email</span>
                    </label>
                </div>

                <div className="ceph__form-group">
                    <input type="text" name="name" required autoComplete="off" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
                    <label className="ceph__label-name" htmlFor="name">
                        <span className="ceph__content-name">Phone Number</span>
                    </label>
                </div>

                <Button clickHandler={handleFormSubmission} disabled={isFormValid()} text="SUBMIT" />
            </form>
        </div>
    );
};

export default Form;
