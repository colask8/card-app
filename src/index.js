import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserHistory } from 'history';
import storage from 'redux-persist/lib/storage'; // state to localStorage
import { persistReducer, persistStore } from 'redux-persist';
import mergeReducers, { mergeReducersInitState } from './reducers';
import AppDataReducers, { AppDataInitState } from './data/reducers';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { eventsMiddleware } from './middlewares';
import rootSaga from './data/sagas';

const history = createBrowserHistory();

const persistConfig = {
  key: 'card-app',
  storage
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(
  persistConfig,
  mergeReducers([
    AppDataReducers,
    { combined: 
      { router: connectRouter(history)}
    }
  ])
);

const store = createStore(
  persistedReducer,
  mergeReducersInitState([AppDataInitState]),
  composeWithDevTools(applyMiddleware(
    routerMiddleware(history),
    eventsMiddleware
  ))
)
const persistor = persistStore(store);


ReactDOM.render(
  <React.StrictMode>
    <App store={store} persistor={persistor} history={history}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
