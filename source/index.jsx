import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import AppView from './views/AppView/AppView';
import MainView from './views/MainView/MainView';

render(
    <Provider store={store}>
        <AppView>
            <MainView />
        </AppView>
    </Provider>,
    document.getElementById('app')
);
