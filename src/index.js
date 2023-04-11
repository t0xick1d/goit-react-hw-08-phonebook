import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { store } from './redux-store/store';
//import { store, persistor } from './redux-store/store';
import { Provider } from 'react-redux';
//import { PersistGate } from 'redux-persist/integration/react';

// just forget change settings in gitHub

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
