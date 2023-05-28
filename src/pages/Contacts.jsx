import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList/';
import { Filter } from 'components/Filter/';
import { Loader } from 'components/Loader/Loader';

import {
  selectContacts,
  selectErrorContacts,
  selectIsLoadingContacts,
} from 'redux/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Wrapper } from 'components/PhoneBook/PhoneBook.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingContacts);
  const error = useSelector(selectErrorContacts);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <Wrapper>
        <h1>PhoneBook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        {isLoading && !error && <Loader />}
        {contacts.length > 0 ? (
          <div>
            <Filter />
            <ContactList />
          </div>
        ) : (
          'You have no contacts'
        )}
      </Wrapper>
    </section>
  );
}
