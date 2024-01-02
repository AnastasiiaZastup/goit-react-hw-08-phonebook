import { GlobalStyle } from 'GlobalStyle';
import { Suspense, useEffect, lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/authorization/authSelectors';
import { refresh } from 'redux/authorization/authOperations';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const MyPhonebookPage = lazy(() => import('pages/MyPhonebookPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <p>LOADING...</p>
  ) : (
    <>
      <Suspense fallback={<p>LOADING...</p>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  component={<RegistrationPage />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute
                  component={<LoginPage />}
                  redirectTo="/contacts"
                />
              }
            />

            <Route
              path="contacts"
              element={
                <PrivateRoute
                  component={<MyPhonebookPage />}
                  redirectTo="/login"
                />
              }
            />
          </Route>
        </Routes>
      </Suspense>

      <Toaster position="top-right" />
      <GlobalStyle />
    </>
  );
};
