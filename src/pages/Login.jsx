import { Helmet } from 'react-helmet-async';
import { LoginForm } from 'components/LoginFrom/LoginForm';
import { useSelector } from 'react-redux';
import { selectErrorUser, selectIsLoadingUser } from '../redux/auth/selectors';
import { Loader } from 'components/Loader/Loader';

export default function Login() {
  const isLoading = useSelector(selectIsLoadingUser);
  const error = useSelector(selectErrorUser);

  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
      {isLoading && !error && <Loader />}
    </div>
  );
}
