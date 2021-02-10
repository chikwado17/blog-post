import React, { Component } from 'react'
import UserHeader from '../users/UserHeader';

class PostListDetails extends Component {
    render() { 
        const { post } = this.props;
        return ( 
            <div className="ui segment">
                <div className="ui relaxed divided list">
                    <div className="item">
                        <i className="large github middle aligned icon"></i>
                        <div className="content">
                        <h3 className="header">{post.title}</h3>
                        <div className="description">{post.body}</div><br/>
                            <UserHeader userId={post.userId}/>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
export default PostListDetails;