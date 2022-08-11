import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PersistGate } from 'redux-persist/integration/react';

const st = store();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={st.store}>
      <PersistGate loading={null} persistor={st.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
