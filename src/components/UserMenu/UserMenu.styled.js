import styled from 'styled-components';

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;
`;
export const Title = styled.p`
  font-size: 20px;
  color: #494d5f;
`;

export const UserMenuButton = styled.button`
  width: 120px;
  height: 40px;

  background-color: transparent;
  border: none;
  cursor: pointer;

  font-size: 18px;

  padding: 3px 24px;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 400;
  color: #494d5f;
  background-color: #e5eaf5;
  text-align: center;

  transition-property: background-color, transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.065, 0.445, 0.88, 0.195);

  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

  :hover,
  :active {
    background-color: #d0bdf4;
  }
`;
