import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  margin-bottom: 36px;
`;

export const StyledInput = styled(Field)`
  display: block;
  width: 250px;
  margin: 8px 0;
  padding: 16px;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid blue;
  height: 32px;
`;

export const Error = styled(ErrorMessage)`
  font-size: 16px;
  color: red;
`;

export const StyledLabel = styled.label`
  font-size: 18px;
`;

export const StyledButton = styled.button`
  margin-top: 18px;
  padding: 4px;
  background-color: white;
  border: transparent;
  border-radius: 4px;

  &:hover {
    background-color: white;
  }
`;
