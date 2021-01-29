import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../redux/blog/actions/postActions';



class UserHeader extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() { 
        const { user } = this.props; 
        return ( 
            <div>
                <p>{user && user.name}</p>
            </div>
          );
    }
}
 

const mapDispatchToProps = {
    fetchUser
}

const mapStateToProps = (state, ownProps) => ({
    user: state.users.find(user => user.id === ownProps.userId)
});


export default connect(mapStateToProps, mapDispatchToProps)(UserHeader); 
