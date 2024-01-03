import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../../redux/selectors';
import { LineWave } from 'react-loader-spinner';
import { Container, Title } from './User.styled';
import { Filter } from 'components/Filter/Filter';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { Contacts } from 'components/Contacts/Contacts';

export const User = () => {
  const contacts = useSelector(state => state.contacts.items);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Container>
      <Title>New Contact</Title>
      <Phonebook></Phonebook>

      <Title>My Phonebook</Title>
      {contacts.length > 0 ? (
        <Filter></Filter>
      ) : (
        !error && !isLoading && <p>You don't have any contacts</p>
      )}
      <Contacts></Contacts>
      {error && <p>{error}</p>}
      {isLoading && (
        <LineWave
          height="100"
          width="100"
          color="blue"
          ariaLabel="line-wave"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          firstLineColor=""
          middleLineColor=""
          lastLineColor=""
        />
      )}
    </Container>
  );
};
