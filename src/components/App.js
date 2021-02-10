import React from 'react';
import PostList from './posts/PostList';

class App extends React.Component { 
    render() { 
        return ( 
            <div style={{marginTop:'20px'}}>
                <div className="ui container">
                    <PostList/>
                </div>
            </div>
         );
    }
}
 
export default App;