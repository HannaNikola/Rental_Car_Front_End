
import { Formik, Form, Field, ErrorMessage} from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { BoxFormic, InputField, StyledDatePicker, MessageInput, ButtonSubmit, TitleForm, TextForm } from './FormElement.styled';
import { submitForm } from '../../redux/reducerForm';

const BookSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too short!')
            .max(50, 'Too Long!')
            .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});


const DatePickerField = ({ field, form }) => {
    const [startDate, setStartDate] = useState(null);
    const handleChange = (date) => {
        setStartDate(date);
        form.setFieldValue(field.name, date ? date.toISOString() : '');
    };
    return (
        <StyledDatePicker
            selected={startDate}
            onChange={handleChange}
            dateFormat="MMMM d, yyyy"
            placeholderText="Booking date"
        />
    );
};



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
                <TextForm>Stay connected! We are always ready to help you</TextForm>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        bookingDate: '',
                        massage: ''

                    }}

                    validationSchema={BookSchema}
                    onSubmit={(values, actions) => {
                        handleValue(values);
                        actions.resetForm();
                    }}
                >
                    {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="name"></label>
                        <InputField id="name" name="name" placeholder="name" />
                            {errors.name && touched.name ? (<div>{errors.name}</div> ) : null}<ErrorMessage name="name" />
                            
                        <label htmlFor="email"></label>
                        <InputField id="email" name="email" placeholder="email" />
                            {errors.email && touched.email ? (<div>{errors.email}</div>) : null} <ErrorMessage name="email" />
                        <label htmlFor="bookingDate"></label>
                        <Field name="bookingDate" component={DatePickerField} />

                        <label htmlFor="message"></label>
                        <MessageInput id="message" name="message" as="textarea" placeholder="Enter your message" />
                            <ButtonSubmit type="submit">Send</ButtonSubmit >
                            
                        </Form>
                    )}
                    
                </Formik>
            </BoxFormic>
       </div> 
        
    )
}

