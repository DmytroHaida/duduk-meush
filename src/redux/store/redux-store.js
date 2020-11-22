import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import PostsReducer from '../reducer/post-reducer';

const reducers = combineReducers({
    form: formReducer,
    posts: PostsReducer
});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;