import styled from 'styled-components';

export const UserBox = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;
export const UserName = styled.p`
  font-style: italic;
  color: #3ba3cf;
`;

export const Button = styled.button`
  font-family: monospace;
  border: 2px solid transparent;
  border-radius: 8px;
  font-weight: 400;
  font-size: 18px;
  text-align: center;

  background-color: rgb(255, 127, 80);
  color: white;
  padding: 7px;
  transition: background-color 200ms linear;

  :hover {
    background-color: rgb(237, 112, 66);
  }
`;
