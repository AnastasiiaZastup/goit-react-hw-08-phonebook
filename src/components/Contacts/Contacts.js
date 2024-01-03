import { useDispatch, useSelector } from 'react-redux';
import { Contact, Span, Btn } from './Contacts.styled';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from '../../redux/contacts/operations';
import { selectVisibleContacts } from '../../redux/selectors';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ul>
        {contacts.map(contact => {
          const { id, name, number } = contact;

          return (
            <Contact key={id}>
              <Span>{name}:</Span>
              <Span>{number}</Span>
              <Btn type="button" onClick={() => dispatch(deleteContact(id))}>
                <RiDeleteBin6Line />
              </Btn>
            </Contact>
          );
        })}
      </ul>
    </>
  );
};
