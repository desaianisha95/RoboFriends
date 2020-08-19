import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import {createStore} from 'redux';
import './index.css';
import App from './Containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import {robots} from './robots';
import {searchRobots} from './reducer';

const store = createStore(searchRobots)

ReactDOM.render(
 
  <React.StrictMode>
    <Provider store ={store}>
    <App  />
    </Provider>
  

  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
