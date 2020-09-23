import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropType from 'prop-types';

// Components
import Button from '../components/Button';
import Input from '../components/Input';
import QuestionList from '../components/QuestionList';

// Consts
import api from '../consts/api';

// Redux
import { setEntry } from '../redux/actions';
import Checkbox from '../components/Checkbox';

const EntryHomeScreen = ({ match, setEntry }) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [redirectTo, setRedirectTo] = useState('');

    const isFormValid = () => {
        if (!name || !isChecked) {
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
                <QuestionList />

                <p className="ceph__text md">Please fill in your name and at least one of the contact fields so we can inform you of any Coronavirus cases.</p>

                <Input label="Name" onChangeHandler={(event) => { setName(event.target.value); setError(''); }} isRequired={true} type="text" value={name} />
                <Input label="Email" onChangeHandler={(event) => { setEmail(event.target.value); setError(''); }} isRequired={true} type="text" value={email} />
                <Input label="Phone Number" onChangeHandler={(event) => { setPhoneNumber(event.target.value); setError(''); }} isRequired={true} type="number" value={phoneNumber} />

                { error && <p className="ceph__text error">{error}</p> }

                <p className="ceph__text md">Your data will be deleted after the mandatory retention period.</p>

                <Checkbox label="I agree with the privacy policy" onChangeHandler={(event) => setIsChecked(event.target.checked)} value={isChecked} />

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
