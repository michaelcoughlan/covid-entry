import React, { Fragment, useEffect } from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { checkSession } from '../redux/actions';
import AdminHomeScreen from '../screens/AdminHomeScreen';
import AdminDashboard from '../screens/AdminDashboard';
import EntryHomeScreen from '../screens/EntryHomeScreen';
import EntrySuccessScreen from '../screens/EntrySuccessScreen';
import LoadingSpinner from './LoadingSpinner';
import Navbar from './Navbar';
import '../styles/App.scss';

const App = ({ checkSession, isLoading, user }) => {    
    useEffect(() => {
        checkSession();
        // eslint-disable-next-line
    }, []);

    if (isLoading) {
        return <LoadingSpinner />
    }

    return (
        <HashRouter>
            <Navbar />
            <div className="ceph__container">
                <Switch>
                    <Route exact path={`/entries/${process.env.REACT_APP_PUB_ID}`} component={EntryHomeScreen} />
                    <Route exact path={`/entries/${process.env.REACT_APP_PUB_ID}/success`} component={EntrySuccessScreen} />
                    <Route exact path="/admin" component={AdminHomeScreen} />
                    {
                        user &&
                        <Fragment>
                            <Route exact path={`/admin/${process.env.REACT_APP_PUB_ID}/dashboard`} component={AdminDashboard} />
                            <Redirect to={`/admin/${process.env.REACT_APP_PUB_ID}/dashboard`} />
                        </Fragment>
                    }
                    <Redirect to={`/entries/${process.env.REACT_APP_PUB_ID}`} />
                </Switch>
            </div>
        </HashRouter>
  );
}

const mapStateToProps = state => {
    return {
        isLoading: state.authReducer.isLoading,
        user: state.authReducer.user,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        checkSession: () => dispatch(checkSession()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
