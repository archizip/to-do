import {combineReducers} from 'redux';
import todoReducer from './items';

const rootReducer = combineReducers({
  todo: todoReducer
});

export default rootReducer;
