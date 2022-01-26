import styled from 'styled-components';

export const BtnList = styled.ul`
  display: flex;
  text-decoration: none;
`;

export const BtnItem = styled.li`
  :not(:last-child) {
    margin-right: 10px;
  }
`;

export const Btn = styled.button`
  text-transform: capitalize;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  :hover {
    color: red;
    background-color: rgb(255, 255, 128);
    border-radius: 20px;
    width: 80px;
    font-size: 20px;
  }
`;
