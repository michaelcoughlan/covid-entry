import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/actions';
import Button from '../components/Button';
import Input from '../components/Input';

const AdminHomeScreen = ({ login }) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');

    const isFormValid = () => !email || !password;

    useEffect(() => {
        // console.log(firebase.fb.getUser());
    }, [])

    const handleSignInSubmission = (event) => {
        event.preventDefault();
        login(email, password);
        // firebase.fb.signIn(email, password).then(userResponse => login(userResponse));
    };

    const handleSignUpSubmission = (event) => {
        event.preventDefault();
        // firebase.fb.signUp(email, password).then(userResponse => login(userResponse));
    };

    return (
        <form className="ceph__form">
            <p className="ceph__text md">Enter your email and password to login to the admin dashboard.</p>

            <Input isRequired={true} label="Email" onChangeHandler={(event) => setEmail(event.target.value)} type="text" value={email} />
            <Input isRequired={true} label="Password" onChangeHandler={(event) => setPassword(event.target.value)} type="password" value={password} />

            <div>
                <Button clickHandler={handleSignInSubmission} disabled={isFormValid()} text="SIGN IN" />
                <Button clickHandler={handleSignUpSubmission} disabled={isFormValid()} text="SIGN UP" />
            </div>

            <p className="ceph__text error">{error}</p>
        </form>
    );
};

const mapStateToProps = state => ({
    user: state.authReducer.user,
});

const mapDispatchToProps = dispatch => {
    return {
        login: (email, password) => dispatch(login(email, password)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminHomeScreen);
