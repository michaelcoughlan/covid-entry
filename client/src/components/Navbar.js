import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/actions';

const  Navbar = ({ logout, user }) => {
    return (
        <nav className="ceph__navbar">
            <div className="ceph__heading">
                COVID Entry
            </div>
            {
                user
                ?   <p onClick={logout}>Logout</p>
                :   <p><Link to={`/admin/${process.env.REACT_APP_PUB_ID}`}>Admin</Link></p>
            }
        </nav>
    );
};

const mapStateToProps = (state) => ({
    user: state.authReducer.user,
});

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
