import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login, resetPassword } from '../redux/actions';
import Button from '../components/Button';
import Input from '../components/Input';

const AdminHomeScreen = ({ login, resetPassword }) => {
    const [email, setEmail] = useState('');
    const [error] = useState('');
    const [password, setPassword] = useState('');

    const isFormValid = () => !email || !password;

    const handleSignInSubmission = (event) => {
        event.preventDefault();
        login(email, password);
    };

    const handleForgotPassword = (event) => {
        event.preventDefault();
        resetPassword(email);
    };

    return (
        <form className="ceph__form">
            <p className="ceph__text md">Enter your email and password to login to the admin dashboard.</p>

            <Input isRequired={true} label="Email" onChangeHandler={(event) => setEmail(event.target.value)} type="text" value={email} />
            <Input isRequired={true} label="Password" onChangeHandler={(event) => setPassword(event.target.value)} type="password" value={password} />

            <div>
                <Button clickHandler={handleSignInSubmission} disabled={isFormValid()} text="SIGN IN" />
                <Button clickHandler={handleForgotPassword} disabled={isFormValid()} text="SIGN UP" />
            </div>

            <p className="ceph__text error">{error}</p>
        </form>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        login: (email, password) => dispatch(login(email, password)),
        resetPassword: (email) => dispatch(resetPassword(email)),
    };
}

export default connect(null, mapDispatchToProps)(AdminHomeScreen);
