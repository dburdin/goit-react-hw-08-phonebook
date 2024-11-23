import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 800px;
  height: 400px;
  display: flex;
  border-radius: 40px;
  margin: 40px auto;

  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;

  background: linear-gradient(
    45deg,
    rgba(229, 234, 245, 1) 0%,
    rgba(160, 210, 235, 1) 20%,
    rgba(208, 189, 244, 0.5522584033613445) 100%
  );

  color: #494d5f;
`;
export const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
`;
export const SubTitle = styled.h2`
  font-size: 30px;
  font-weight: 400;
`;

const shimmer = keyframes`
  0% {
    background-position: -200%;
  }
  50% {
    background-position: 200%;
  }
  100% {
    background-position: -200%;
  }
`;

export const NavigatonLink = styled(NavLink)`
  position: relative;
  cursor: pointer;
  display: inline-block;

  font-size: 30px;
  padding: 5px;

  color: #494d5f;
  text-align: center;
  text-decoration: none;

  background: linear-gradient(to right, #e5eaf5, #494d5f, #e5eaf5);
  background-size: 200%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: ${shimmer} 15000ms infinite linear;

  ::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 100%;
    background: linear-gradient(to right, #494d5f, #e5eaf5);
    transform: scaleX(0);
    transition: transform 250ms cubic-bezier(0.065, 0.445, 0.88, 0.195);
  }

  :hover::after {
    transform: scaleX(1);
  }
`;
