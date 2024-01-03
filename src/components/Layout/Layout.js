import { Outlet } from 'react-router-dom';
import { UserMenu } from '../UserMenu/UserMenu';
import { MainContainer } from './Layout.styled';

export const Layout = () => {
  return (
    <MainContainer>
      <UserMenu />
      <Outlet />
    </MainContainer>
  );
};
