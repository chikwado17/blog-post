import React from 'react';
import { connect } from 'react-redux';
import PostListDetails from './PostListDetails';
import { fetchPosts } from '../../redux/blog/actions/postActions';

const mapDispatchToProps = {
    fetchPosts
}

const mapStateToProps = (state) => ({
    posts: state.posts
});

class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() { 
        const { posts } = this.props;
        return ( 
            <div>
                {posts && posts.map((post) => (
                     <PostListDetails key={post.id} post={post} /> 
                ))}
            </div>
         );
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(PostList);