import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import  {persistor, store}  from './redux/store'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { app } from './firebase.config';

import 'react-notifications-component/dist/theme.css';
import { ReactNotifications } from 'react-notifications-component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store} app={app}>
   <PersistGate loading={'loading'} persistor={persistor}></PersistGate>
   <ReactNotifications />
    <App />
 </Provider>,
)