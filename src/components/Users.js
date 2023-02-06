import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';


class Users extends Component {
  constructor() {
    super();
    // 항상 객체로 선언해야 함.
    // property 이름은 항상 state여야 함.
    this.state = {
      showUsers: true,
      more: 'Test',
    };

  }

  componentDidUpdate() {
    // try {
    //   if (this.props.users.length === 0) {
    //     throw new Error('No users provided!');
    //   }
    // } catch (err) {

    // }

    if (this.props.users.length === 0) {
      throw new Error('No users provided!');
    }
  }

  toggleUsersHandler() {
    // this.state.showUser = false; // NOT!!
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {
          this.props.users.map(
            (user) => (
              <User key={user.id} name={user.name} />
            )
          )
        }
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
