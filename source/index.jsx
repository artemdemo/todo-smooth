import 'babel-polyfill';
import Router from 'preact-router';
import Preact from 'preact';
import { Provider } from 'preact-redux';

// import history from './history';
import store from './store';

import AppView from './views/AppView/AppView';
import MainView from './views/MainView';

Preact.render(
    <Provider store={store}>
        <AppView>
            <Router>
                <MainView path='/:group?/:id?' />
            </Router>
        </AppView>
    </Provider>,
    document.getElementById('app')
);
