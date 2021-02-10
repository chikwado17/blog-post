import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../redux/blog/actions/postActions';


const mapDispatchToProps = {
    fetchUser
}
const mapStateToProps = (state, ownProps) => ({
    user: state.users.find(user => user.id === ownProps.userId)
});
class UserHeader extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() { 
        const { user } = this.props; 
        return ( 
            <div>
                <p>{user && user.name}</p>
                <p>{user && user.email} | {user && user.phone}</p>
            </div>
          );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserHeader); 
