import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import Button from '../components/Button';
import Input from '../components/Input';
import api from '../consts/api';
import { setEntry } from '../redux/actions';
import { Redirect } from 'react-router-dom';

const EntryHomeScreen = ({ match, setEntry }) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [redirectTo, setRedirectTo] = useState('');

    const isFormValid = () => {
        if (!name) {
            return false;
        }

        if (!phoneNumber && !email) {
            return false;
        }

        return true;
    }

    const handleFormSubmission = (event) => {
        event.preventDefault();

        api.post('/entries', { name, email, phoneNumber, uid: match.params.uid })
        .then(res => {
            setEntry(res.data);
            setRedirectTo(`/entries/${match.params.uid}/success`);
        })
        .catch(error => {
            if (error.response) {
                console.log(error.response);
                setError(error.response.data)
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log(error);
            }
        });
    };

    if (redirectTo) {
        return <Redirect to={redirectTo} />;
    }

    return (
        <div className="ceph__form-container">
            <form className="ceph__form">
                <Input label="Name *" onChangeHandler={(event) => { setName(event.target.value); setError(''); }} isRequired={true} type="text" value={name} />
                <Input label="Email" onChangeHandler={(event) => { setEmail(event.target.value); setError(''); }} isRequired={true} type="text" value={email} />
                <Input label="Phone Number" onChangeHandler={(event) => { setPhoneNumber(event.target.value); setError(''); }} isRequired={true} type="number" value={phoneNumber} />

                { error && <p className="ceph__text error">{error}</p> }

                <Button clickHandler={handleFormSubmission} disabled={!isFormValid()} text="SUBMIT" />
            </form>
        </div>
    );
};

EntryHomeScreen.propTypes = {
    match: PropType.object,
    setEntry: PropType.func,
};

EntryHomeScreen.defaultProps = {
    match: {},
    setEntry: () => {},
};

const mapDispatchToProps = dispatch => {
    return {
        setEntry: (entry) => dispatch(setEntry(entry))
    };
};

export default connect(null, mapDispatchToProps)(EntryHomeScreen);
