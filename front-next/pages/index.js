import {useState, useEffect} from 'react';
import axios from 'axios';
import Button from '../components/Button';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [firstname, setFirstname] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/api/users').then(({data}) => {
      setUsers(data);
    });
  }, []);

  const addUser = () => {
    setFirstname('');
    axios
      .post('http://localhost:3001/api/users', {
        firstname
      })
      .then(({data}) => {
        setUsers(users => {
          return users.concat(data);
        });
      });
  };

  return (
    <div>
      <input value={firstname} onChange={e => setFirstname(e.target.value)} />
      <Button onClick={() => addUser()}>Add user {firstname}</Button>
      {users.map(user => {
        return <div>{user.firstname}</div>;
      })}
    </div>
  );
};
export default Home;
