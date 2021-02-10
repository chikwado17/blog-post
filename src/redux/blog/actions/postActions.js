import _ from 'lodash';
import JsonPlaceholder from '../../../apis/JsonPlaceholder';

export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await JsonPlaceholder.get('/posts');

        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        });
    };
};

export const fetchUser = (userId) => {
  return (dispatch) => {
    _fetchUser(userId, dispatch);
  }
};

//using memoize from lodash 
const _fetchUser = _.memoize( async (userId, dispatch) => {
    const response = await JsonPlaceholder.get(`/users/${userId}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
});