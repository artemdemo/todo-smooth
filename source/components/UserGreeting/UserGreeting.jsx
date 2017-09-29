import React from 'react';
import PropTypes from 'prop-types';

import './UserGreeting.less';

const UserGreeting = (props) => {
    const { user } = props;

    return (
        <div className='user-greeting'>
            <div className='user-greeting__avatar' />
            <div className='user-greeting__hello'>
                Hello, {user.name}.
            </div>
            Looks like it's going to be very productive day.
            Let's get started!
        </div>
    );
};

UserGreeting.propTypes = {
    user: PropTypes.shape({}),
};

UserGreeting.defaultProp = {
    user: {},
};

export default UserGreeting;
