

export const fetchPost = (post) => {
    return {
        type: 'FETCH_POST',
        post
    }
}

export const fetchUsers = (users) => ({
    type: 'FETCH_USERS',
    users
});