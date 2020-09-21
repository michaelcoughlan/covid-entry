import React from 'react';
import Navbar from './Navbar';
import '../styles/App.scss';
import Form from './Form';

const App = () => {
    return (
        <div>
            <Navbar />
            <div className="ceph__container">
                <Form />
            </div>
        </div>
  );
}

export default App;
