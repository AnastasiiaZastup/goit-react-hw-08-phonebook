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
        colorScheme="purple"
        width="200px"
        marginLeft="auto"
        marginRight="auto"
      >
        <Link to="/contacts">To my contacts</Link>
      </Button>
    </div>
  ) : (
    <>
      <p>Wellcome to Phonebook!</p>
    </>
  );
}
