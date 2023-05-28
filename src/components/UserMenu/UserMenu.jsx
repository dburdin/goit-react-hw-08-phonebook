import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

import { Title, UserMenuContainer, UserMenuButton } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuContainer>
      <Title>Welcome, {user.name}!</Title>
      <UserMenuButton type="button" onClick={() => dispatch(logOut())}>
        Log out
      </UserMenuButton>
    </UserMenuContainer>
  );
};
