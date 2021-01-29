import { combineReducers } from 'redux';
import postReducers from '../redux/blog/reducers/postReducers';
import userReducer from '../redux/blog/reducers/userReducer';


const rootReducers = combineReducers({
    posts:postReducers,
    users:userReducer
});

export default rootReducers;