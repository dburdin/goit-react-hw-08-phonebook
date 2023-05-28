import styled from 'styled-components';

export const Container = styled.div`
  width: 800px;
  height: 400px;
  display: flex;
  border-radius: 40px;
  margin: 40px auto;

  align-items: center;
  justify-content: center;

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
