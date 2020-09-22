import React from 'react';
import PropType from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import months from '../consts/months';

const EntrySuccessScreen = ({ entry, match }) => {
    if (!entry) {
        return <Redirect to={`/entries/${match.params.uid}`} />
    }

    const date = new Date(entry.created_at).getDate();
    const month = months[new Date(entry.created_at).getMonth()];
    const hours = new Date(entry.created_at).getHours();
    const minutes = new Date(entry.created_at).getMinutes();

    return (
        <div className="ceph__success">
            <div className="ceph__success-icon" />
            <h1 className="ceph__text kg">Welcome {entry.name}!</h1>
            <p className="ceph__text md">Your entry has been logged at <span className="ceph__bold">{date} {month} at {hours}:{minutes}</span>.</p>
            <p className="ceph__text md">Please take a screenshot of this to keep a record for yourself.</p>
        </div>
    );
};

EntrySuccessScreen.propTypes = {
    entry: PropType.object,
    match: PropType.object,
};

EntrySuccessScreen.defaultProps = {
    entry: {},
    match: {},
};

const mapStateToProps = state => ({
    entry: state.entryReducer.entry,
});

export default connect(mapStateToProps)(EntrySuccessScreen);
