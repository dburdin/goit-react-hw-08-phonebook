import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigatonLink = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  width: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 20px;

  padding: 5px;

  color: #494d5f;

  text-align: center;

  transition-property: color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.065, 0.445, 0.88, 0.195);

  &:after {
    content: '';
    display: block;
    width: 0%;
    height: 1px;
    background-color: #e5eaf5;
  }

  :hover {
    color: #e5eaf5;
  }

  &.active {
    color: #e5eaf5;
    &:after {
      width: 100%;
    }
  }
`;
export const AuthNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
