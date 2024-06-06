
import { Formik, Form, Field, ErrorMessage} from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { useState} from 'react';
import { BoxFormic, InputField, StyledDatePicker, MessageInput, ButtonSubmit, TitleForm, TextForm } from './FormElement.styled';
import { submitForm } from '../../redux/reducerForm';
import { CiCalendar } from "react-icons/ci";
import { useEffect } from 'react';

const BookSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too short!')
            .max(50, 'Too Long!')
            .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string(),
    

});
 



const DatePickerField = ({ field, form }) => {
    const [startDate, setStartDate] = useState(null);

    useEffect(() => {
        setStartDate(field.value ? new Date(field.value) : null)
    }, [field.value]);

    const handleChange = (date) => {
            setStartDate(date);
          form.setFieldValue(field.name, date ? date.toISOString() : '');
      };
    
    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <StyledDatePicker
                selected={startDate}
                onChange={handleChange}
                dateFormat="MMMM d, yyyy"
                placeholderText="Booking date"
            />
            <CiCalendar style={{
                position: 'absolute',
                right: '18px',
                top: '18px',
                fontSize: '20px'
            }} />
        </div>
    );
}




export const FormElement = () => {
    const dispatch = useDispatch();
    

    const handleValue = (values) => {
        dispatch(submitForm(values));
        
        toast.success('Data sent successfully!');
        console.log("data", values);
        
        
        
    };

    return (
        <div>
            <Toaster position="top-center" reverseOrder={false} />
            <BoxFormic>
                <TitleForm>Book your camper now</TitleForm>
                <TextForm>Stay connected! We are always ready to help you.</TextForm>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        bookingDate: '',
                        message: '',
                    }}

                    validationSchema={BookSchema}
                    onSubmit={(values, actions) => {
                        handleValue(values);
                        actions.resetForm();
                        
                       
                    }}
                >
                    
                    <Form>
                        <label htmlFor="name"></label>
                        <InputField id="name" name="name" placeholder="name" />
                            <ErrorMessage name="name" />
                            
                        <label htmlFor="email"></label>
                        <InputField id="email" name="email" placeholder="email" />
                            <ErrorMessage name="email" />
                        <label htmlFor="bookingDate"></label>
                        <Field name="bookingDate" component={DatePickerField} />

                            <label htmlFor="message"></label>
                        <MessageInput  name="message" placeholder="Enter your message"/>
                            <ButtonSubmit type="submit">Send</ButtonSubmit >
                            
                        </Form>
                    
                    
                </Formik>
            </BoxFormic>
       </div> 
        
    )
}

