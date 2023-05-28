import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Formik, ErrorMessage } from 'formik';

import * as Yup from 'yup';

import {
  Form,
  FormLabel,
  Field,
  SubmitButton,
} from '../ContactForm/ContactForm.styled';
import { Wrapper } from 'components/PhoneBook/PhoneBook.styled';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const Schema = Yup.object().shape({
  name: Yup.string().min(6, 'Too Short!').max(20, 'Too Long!').required(),
  password: Yup.string().min(5, 'Too Short!').required(),
  email: Yup.string().email().required(),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (data, { resetForm }) => {
    dispatch(register({ ...data }));
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
          <FormLabel htmlFor="name">
            <span>Username</span>
            <Field id="name" type="text" placeholder="Your Name" name="name" />
            <ErrorMessage
              name="name"
              component="div"
              style={{
                color: 'red',
                fontSize: '11px',
                textTransform: 'uppercase',
              }}
            />
          </FormLabel>

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
              placeholder="Your password (min 5 characters)"
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

          <SubmitButton type="submit">Register</SubmitButton>
        </Form>
      </Formik>
    </Wrapper>
  );
};
