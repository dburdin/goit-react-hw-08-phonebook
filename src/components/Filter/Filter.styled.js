import styled from 'styled-components';
export const FilterField = styled.input`
  width: 450px;
  height: 30px;
  margin: 10px 0;
  outline: none;
  border: none;
  border-radius: 0;
  font-size: medium;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

  background-color: #e5eaf5;

  :active,
  :focus {
    outline: 1px solid #a0d2eb;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px inset;
  }
`;
