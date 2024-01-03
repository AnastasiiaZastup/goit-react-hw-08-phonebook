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
  background-color: transparent;
  border: transparent;
  border-radius: 8px;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(229 190 151 / 9%);
  &:hover {
    background-color: #ededed;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
