import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';

import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import postsSaga from './saga/postsSaga';
import { reducers } from './store/reducer';
import { BrowserRouter } from 'react-router-dom';
import { userPostsSaga, userSaga } from './saga/userSaga';

const saga = createSagaMiddleware();

export type RootState = ReturnType<typeof reducers>;

export const store = configureStore({
    reducer: reducers,
    middleware: [saga],
});

saga.run(postsSaga);
saga.run(userSaga);
saga.run(userPostsSaga)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
       <BrowserRouter>
           <App />
       </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

