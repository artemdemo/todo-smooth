import Preact from 'preact';

import './AppView.less';

class AppView extends Preact.Component {
    render(props) {
        return (
            <div>
                {props.children}
            </div>
        );
    }
}

export default AppView;
