import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/main.less';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
  reducers,
  applyMiddleware(thunk),
);

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('app'));
