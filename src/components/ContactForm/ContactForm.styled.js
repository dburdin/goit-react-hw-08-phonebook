import { Form as FormikForm, Field as FormikInput } from 'formik';

import styled from 'styled-components';

export const Form = styled(FormikForm)`
  margin: 0 auto;
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  padding: 5px 5px;
  font-size: large;
  color: #494d5f;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const Field = styled(FormikInput)`
  height: 30px;
  outline: none;
  padding: 10px;
  border: none;
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

export const SubmitButton = styled.button`
  width: 200px;
  height: 50px;
  margin: 20px auto;
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
