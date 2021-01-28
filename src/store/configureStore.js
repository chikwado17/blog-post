import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducers from '../rootReducers/rootReducers';


export const configureStore = () => {

    const middleware = [thunk];
    const store = createStore(
        rootReducers,
        composeWithDevTools(
            applyMiddleware(...middleware),
    ));
    

    return store;
}