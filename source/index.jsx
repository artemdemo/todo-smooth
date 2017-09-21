import 'babel-polyfill';
import Router from 'preact-router';
import { h, render } from 'preact';

// import history from './history';
// import store from './store';

import AppView from './views/AppView';
import MainView from './views/MainView';

render(
    <AppView>
        <Router>
            <MainView path='/:group?/:id?' />
        </Router>
    </AppView>,
    document.getElementById('app')
);
