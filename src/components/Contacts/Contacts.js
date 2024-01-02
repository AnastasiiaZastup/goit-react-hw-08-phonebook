import { useDispatch, useSelector } from 'react-redux';
import { Item, ButtonList } from './ContactList.styled';
import { deleteContact } from '../../redux/operations';
import {
  selectFilter,
  selectVisible,
  selectContacts,
} from '../../redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const visible = useSelector(selectVisible);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getContacts = () => {
    if (filter === '') {
      return contacts;
    }
    return visible;
  };

  const filteredContacts = getContacts();

  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {filteredContacts.map(contact => {
          const { id, name, number } = contact;

          return (
            <Item key={id}>
              <p>{name}:</p>
              <p>{number}</p>
              <ButtonList onClick={() => dispatch(deleteContact(id))}>
                Delete
              </ButtonList>
            </Item>
          );
        })}
      </ul>
    </div>
  );
};
