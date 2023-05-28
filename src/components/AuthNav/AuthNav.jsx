import { NavigatonLink, AuthNavContainer } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavContainer>
      <NavigatonLink to="/register">Register </NavigatonLink>
      <NavigatonLink to="/login">Log In </NavigatonLink>
    </AuthNavContainer>
  );
};
