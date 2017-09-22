import Preact from 'preact';
import PropTypes from 'prop-types';

import './UserGreeting.less';

const UserGreeting = (props) => {
    const { user } = props;

    return (
        <div class='user-greeting'>
            <div class='user-greeting__hello'>
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
