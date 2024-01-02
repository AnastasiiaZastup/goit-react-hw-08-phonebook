import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedin } from 'redux/authorization/authSelectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedin = useSelector(selectIsLoggedin);

  return isLoggedin ? <Navigate to={redirectTo} /> : Component;
};
