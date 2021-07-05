import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import tableDataReducer from './reducers/tableDataReducer';

const store = createStore(tableDataReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
