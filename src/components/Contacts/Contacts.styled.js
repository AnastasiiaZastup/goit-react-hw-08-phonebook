import styled from 'styled-components';

export const Contact = styled.li`
  list-style: none;
`;

export const Span = styled.span`
  line-height: 48px;
  padding-right: 12px;
  font-size: 18px;
`;

export const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;
  text-align: center;
  font-size: 12px bold;
  background-color: white;
  border: transparent;
  border-radius: 8px;
  &:hover {
    background-color: #ffffff;
  }
`;
