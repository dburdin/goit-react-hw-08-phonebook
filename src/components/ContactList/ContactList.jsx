import { List } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';

import { selectVisibleContacts } from '../../redux/selectors';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {visibleContacts.map(({ name, phone, id }) => {
        return <Contact key={id} id={id} name={name} number={phone} />;
      })}
    </List>
  );
};
