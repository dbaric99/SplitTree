import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {store} from './state/store';
import { Provider } from "react-redux";
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import Skeleton from 'react-loading-skeleton';


const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Skeleton height='100vh' width='100vw' />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
