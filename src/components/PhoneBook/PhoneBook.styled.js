import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 550px;
  margin: 30px auto;
  padding: 30px 20px;
  border: solid 3px #eee;
  box-shadow: 5px 5px 15px 5px #eeeeee;

  background: rgb(229, 234, 245);
  background: linear-gradient(
    45deg,
    rgba(229, 234, 245, 1) 0%,
    rgba(160, 210, 235, 1) 20%,
    rgba(208, 189, 244, 0.5522584033613445) 100%
  );

  color: #494d5f;
`;
