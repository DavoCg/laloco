import React from 'react';
import axios from 'axios';
import Button from '../components/Button';

class Old extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      firstname: ''
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/users').then(({data}) => {
      this.setState({users: data});
    });
  }

  addUser = () => {
    this.setState({firstname: ''});
    axios
      .post('http://localhost:3001/api/users', {
        firstname: this.state.firstname
      })
      .then(({data}) => {
        this.setState(state => ({
          users: state.users.concat(data)
        }));
      });
  };

  render() {
    return (
      <div>
        <input
          value={this.state.firstname}
          onChange={e => this.setState({firstname: e.target.value})}
        />
        <Button onClick={this.addUser}>Add user {this.state.firstname}</Button>
        {this.state.users.map(user => {
          return <div>{user.firstname}</div>;
        })}
      </div>
    );
  }
}

export default Old;
