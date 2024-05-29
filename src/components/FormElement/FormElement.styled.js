import styled from 'styled-components';
import { Field } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const BoxFormic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 448px;
  padding: 24px;
  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.2);
`;

export const InputField = styled(Field)`
  display: flex;
  align-items: flex-start;
  padding: 18px;
  margin-bottom: 14px;
  width: 400px;
  height: 20px;
  border: 10px;
  background: #f7f7f7;
`;

export const MessageInput = styled(Field)`
  display: flex;
  align-items: flex-start;
  border-radius: 10px;
  border-color: #f7f7f7;
  background: #f7f7f7;
  width: 400px;
  min-height: 114px;
  padding: 18px;
  margin-bottom: 24px;
`;

export const ButtonSubmit = styled.button`
  display: block;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(0, 0, 0, 0);
  background: #e44848;
  border-radius: 200px;
  padding: 16px 60px;
  color: #ffffff;

  &.active {
    color: white;
    background-color: #e44848;
  }
`;

export const TitleForm = styled.h1`
  color: #101828;
  font-size: 20px;
  font-weight: 600;
  font-style: normal;
  margin-bottom: 8px;
`;

export const TextForm = styled.p`
  margin-bottom: 24px;
`;

export const StyledDatePicker = styled(DatePicker)`
  display: flex;
  align-items: flex-start;
  padding: 18px;
  margin-bottom: 14px;
  width: 400px;
  height: 20px;
  border: 10px;
  background: #f7f7f7;
`;