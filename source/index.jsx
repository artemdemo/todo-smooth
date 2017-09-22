import 'babel-polyfill';
import Router from 'preact-router';
import Preact from 'preact';

// import history from './history';
// import store from './store';

import AppView from './views/AppView/AppView';
import MainView from './views/MainView';

Preact.render(
    <AppView>
        <Router>
            <MainView path='/:group?/:id?' />
        </Router>
    </AppView>,
    document.getElementById('app')
);
