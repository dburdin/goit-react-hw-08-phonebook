import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { selectErrorUser, selectIsLoadingUser } from '../redux/auth/selectors';
import { Loader } from 'components/Loader/Loader';

export default function Register() {
  const isLoading = useSelector(selectIsLoadingUser);
  const error = useSelector(selectErrorUser);

  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
      {isLoading && !error && <Loader />}
    </div>
  );
}
