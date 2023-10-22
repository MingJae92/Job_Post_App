// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Navigation from './Components/Navigation';
import jobReducer from './redux/jobReducer';

const store = createStore(jobReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
