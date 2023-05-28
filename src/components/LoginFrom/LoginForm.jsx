import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import * as Yup from 'yup';
import { Formik, ErrorMessage } from 'formik';

import {
  Form,
  FormLabel,
  Field,
  SubmitButton,
} from '../ContactForm/ContactForm.styled';
import { Wrapper } from 'components/PhoneBook/PhoneBook.styled';

const initialValues = {
  email: '',
  password: '',
};

const Schema = Yup.object().shape({
  password: Yup.string().min(5, 'Too Short!').required(),
  email: Yup.string().email().required(),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (data, { resetForm }) => {
    dispatch(logIn({ ...data }));
    resetForm();
  };

  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={Schema}
      >
        <Form>
          <FormLabel htmlFor="email">
            <span>Email address</span>
            <Field
              id="email"
              type="email"
              placeholder="Your Email"
              name="email"
            />
            <ErrorMessage
              name="email"
              component="div"
              style={{
                color: 'red',
                fontSize: '11px',
                textTransform: 'uppercase',
              }}
            />
          </FormLabel>

          <FormLabel htmlFor="password">
            <span>Password</span>
            <Field
              id="password"
              type="password"
              placeholder="Your Password"
              name="password"
            />
            <ErrorMessage
              name="password"
              component="div"
              style={{
                color: 'red',
                fontSize: '11px',
                textTransform: 'uppercase',
              }}
            />
          </FormLabel>

          <SubmitButton type="submit">Login</SubmitButton>
        </Form>
      </Formik>
    </Wrapper>
  );
};
