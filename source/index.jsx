import 'babel-polyfill';
import Preact from 'preact';
import { Provider } from 'preact-redux';

// import history from './history';
import store from './store';

import AppView from './views/AppView/AppView';
import MainView from './views/MainView/MainView';

Preact.render(
    <Provider store={store}>
        <AppView>
            <MainView />
        </AppView>
    </Provider>,
    document.getElementById('app')
);
