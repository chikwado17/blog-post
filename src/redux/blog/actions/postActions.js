import JsonPlaceholder from '../../../apis/JsonPlaceholder';

export const fetchPosts = () => {
    return async (dispatch) => {
        const response =  await JsonPlaceholder.get('/post');

        dispatch({
            type: 'FETCH_POSTS',
            response
        });
    }
}

// export const fetchUsers = (users) => ({
//     type: 'FETCH_USERS',
//     users
// });