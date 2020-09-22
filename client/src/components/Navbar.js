import React from 'react';
import { Link } from 'react-router-dom';

const  Navbar = () => {
    return (
        <nav className="ceph__navbar">
            <div className="ceph__heading">
                COVID Entry
            </div>
            <p>
                <Link to="/admin">Admin</Link>
            </p>
        </nav>
    );
};

export default Navbar;
