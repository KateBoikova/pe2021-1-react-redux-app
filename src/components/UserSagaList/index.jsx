import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import { getUsers } from '../../api';

function UsersSagaList (props) {
  const { users, isFetching, error, getUsers, deleteUser } = props;

  useEffect(() => {
    getUsers();
  }, [users.length]);

  const mapUser = ({ id, name, telNumber, isBanned }) => {
    // const changeBan = () => {
    //   changeBanAction({ id: id, isBanned: !isBanned });
    // };

    // const deleteUser = () => {
    //   deleteUserAction(id);
    // };

    const deleteHandler = () => {
      deleteUser(id);
    };
    return (
      <li key={id}>
        ID: {id} name:{name} tel.:{telNumber}
        <input type='checkbox' checked={isBanned} />
        <button onClick={deleteHandler}>Delete</button>
      </li>
    );
  };
  return (
    <>
      {isFetching && <div>Loading...</div>}
      {error && <div>Error</div>}
      <ul>{users.map(mapUser)}</ul>
    </>
  );
}

const mapStateToProps = state => state.user;

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(actionCreators.getUsersAction()),
  deleteUser: id => dispatch(actionCreators.deleteUserAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersSagaList);
