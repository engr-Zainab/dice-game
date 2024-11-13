import styled from "styled-components";

export const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 18px;
  min-width: 220px;
  border-radius: 5px;
  outline: none;
  border: 1px solid transparent;
  font-size: 16px;
  cursor: pointer;
  transition: 0.4s background ease-in;

  &:hover {
    background-color: transparent;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: 1px solid transparent;
  }
`;
