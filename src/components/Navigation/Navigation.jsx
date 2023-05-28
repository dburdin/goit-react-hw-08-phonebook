import { useAuth } from 'hooks';

import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import {
  Header,
  NavigatonLink,
  NavBar,
  LinkContainer,
} from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <NavBar>
        <LinkContainer>
          <NavigatonLink to="/">Home</NavigatonLink>
          {isLoggedIn && (
            <NavigatonLink to="/contacts">Your contacts</NavigatonLink>
          )}
        </LinkContainer>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </NavBar>
    </Header>
  );
};
