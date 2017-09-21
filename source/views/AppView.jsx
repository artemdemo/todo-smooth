import { h, Component } from 'preact';

class AppView extends Component {
    render(props) {
        return (
            <div>
                {props.children}
            </div>
        );
    }
}

export default AppView;
