import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ButtonsContainer, MenuContainer, StyledUser } from './UserMenu.styled';
import { Button } from '@chakra-ui/react';
import {
  selectIsLoggedin,
  selectUserEmail,
} from '../../redux/authorization/authSelectors';
import { logout } from '../../redux/authorization/authOperations';

export const UserMenu = () => {
  const userEmail = useSelector(selectUserEmail);
  const isLoggedin = useSelector(selectIsLoggedin);
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logout());

  return (
    <MenuContainer>
      <Link to="/">
        <Button variant="text" color="#0099cc">
          Home
        </Button>
      </Link>

      {isLoggedin ? (
        <ButtonsContainer>
          {userEmail && <StyledUser>{userEmail}</StyledUser>}

          <Button type="button" colorScheme="blue" onClick={handleLogout}>
            Logout
          </Button>
        </ButtonsContainer>
      ) : (
        <ButtonsContainer>
          <Button type="button" colorScheme="blue">
            <Link to="/register">Registration</Link>
          </Button>

          <Button type="button" colorScheme="blue">
            <Link to="/login">Login</Link>
          </Button>
        </ButtonsContainer>
      )}
    </MenuContainer>
  );
};
