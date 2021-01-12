import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from 'store';
import App from './App';

const store = configureStore();

ReactDOM.render(
    <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('app'),
);
