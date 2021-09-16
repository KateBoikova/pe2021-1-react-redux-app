import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';

function UsersList (props) {
  const { users, changeBanAction, deleteUserAction } = props;

  const mapUser = ({ id, name, telNumber, isBanned }, index) => {
    const changeBan = () => {
      changeBanAction({ id: id, isBanned: !isBanned });
    };

    const deleteUser = () => {
      deleteUserAction(id);
    };

    return (
      <li key={id}>
        ID: {id} name:{name} tel.:{telNumber}
        <input type='checkbox' checked={isBanned} onChange={changeBan} />
        <button onClick={deleteUser}>Delete</button>
      </li>
    );
  };
  return <ul>{users.map(mapUser)}</ul>;
}
const mapStateToProps = state => state.userState;
const mapDispatchToProps = dispatch => {
  return {
    changeBanAction: newUserInfo => {
      dispatch(actionCreators.changeBan(newUserInfo));
    },
    deleteUserAction: id => {
      dispatch(actionCreators.deleteUser(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
