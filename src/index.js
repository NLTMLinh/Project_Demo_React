import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux'
import { Provider  } from 'react-redux'
import rootReducer from './reducers/index'
import {BrowserRouter} from "react-router-dom";
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import createSagaMiddleAware from 'redux-saga'
import rootSaga from './saga/index'
import App from './App'
const sagaMiddleware  = createSagaMiddleAware();

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer,applyMiddleware(sagaMiddleware ));
let persistor = persistStore(store)
sagaMiddleware .run(rootSaga);


const routing = (
    <Provider store={store} >
        <PersistGate loading={null} persistor={persistor}>
        <App/>
        </PersistGate>
    </Provider>
);
ReactDOM.render(routing, document.getElementById('root'));
