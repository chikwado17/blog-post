import React, { Component } from 'react'


class PostListDetails extends Component {

    render() { 
        return ( 
            <div className="ui segment">
                <div className="ui relaxed divided list">
                    <div className="item">
                        <i className="large github middle aligned icon"></i>
                        <div className="content">
                        <h3 className="header">Semantic-Org/Semantic-UI</h3>
                        <div className="description">Updated 10 mins ago</div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default PostListDetails;