import CounterReducer from './CounterReducer';
import IsLoggedReducer from './IsLoggedReducer';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    Counter: CounterReducer,
    IsLogged: IsLoggedReducer
});

export default rootReducer;