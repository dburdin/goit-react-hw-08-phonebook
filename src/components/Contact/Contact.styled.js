import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  gap: 5px;
  align-items: center;
`;
export const DeleteButton = styled.button`
  width: 70px;
  height: auto;
  margin: 0 auto;
  background-color: transparent;
  border: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px 5px;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 400;
  color: #494d5f;
  background-color: #e5eaf5;

  transition-property: background-color, transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.065, 0.445, 0.88, 0.195);

  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

  :hover,
  :active {
    background-color: #d0bdf4;
  }
`;
