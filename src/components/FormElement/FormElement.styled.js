import styled from 'styled-components';
import { Field } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const BoxFormic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 400px;
  padding: 24px;
  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.2);
`;

export const InputField = styled(Field)`
  
  padding: 18px;
  margin-bottom: 14px;
  width: 364px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid #f7f7f7;
  background: #f7f7f7;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  &:focus {
    border-color: #e44848;
    box-shadow: 0 0 5px rgba(228, 72, 72, 0.8);
    outline: none;
    background-color: #fff;
  }
`;

export const MessageInput = styled(Field)`
display: grid;
  font-size: 16px;
  text-align: start;

  border-radius: 10px;
  border: 1px solid #f7f7f7;
  background: #f7f7f7;
  width: 364px;
  min-height: 114px;
  padding: 18px;
  margin-bottom: 24px;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  &:focus {
    border-color: #e44848;
    box-shadow: 0 0 5px rgba(228, 72, 72, 0.5);
    outline: none;
    background-color: #fff;
  }
`;

export const ButtonSubmit = styled.button`
  display: block;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  border: 2px solid rgba(0, 0, 0, 0);
  background: #e44848;
  border-radius: 200px;
  padding: 16px 60px;
  color: #ffffff;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  &:focus,
  &:hover {
    border-color: #e44848;
    color: #101828;
    background-color: #fff;
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
  width: 364px;
  height: 20px;
  border: 1px solid #f7f7f7;
  border-radius: 10px;
  background: #f7f7f7;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  &:focus {
    border-color: #e44848;
    box-shadow: 0 0 5px rgba(228, 72, 72, 0.5);
    outline: none;
    background-color: background-color: #fff;;
   
  }
`;


