import styled from 'styled-components';
export const FilterField = styled.input`
  width: 400px;
  height: 20px;
  margin: 20px 0;
  padding: 10px;
  outline: none;
  border: 10px;
  border-radius: 10px;
  font-size: medium;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

  background-color: #e5eaf5;

  :active,
  :focus {
    outline: 1px solid #a0d2eb;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px inset;
  }
`;
