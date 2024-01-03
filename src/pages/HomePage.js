import { Button } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  selectIsLoggedin,
  selectUserName,
} from '../redux/authorization/authSelectors';

export default function HomePage() {
  const isLoggedin = useSelector(selectIsLoggedin);
  const userName = useSelector(selectUserName);

  return isLoggedin ? (
    <div>
      <p>Hello {userName}!</p>
      <Button
        variant="link"
        colorScheme="blue"
        width="200px"
        marginLeft="auto"
        marginRight="auto"
      >
        <Link to="/contacts">To my contacts</Link>
      </Button>
    </div>
  ) : (
    <div style={{ textAlign: 'center', marginTop: '15%' }}>
      <h1 style={{ fontSize: '40px' }}>Welcome to Phonebook!</h1>
      <p style={{ fontSize: 'larger' }}>
        To access your contact book, please register or sign in to your existing
        account.
      </p>
    </div>
  );
}
