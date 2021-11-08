import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from './redux/reducers';

export default createStore(
  combineReducers({
    common: reducer,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);
