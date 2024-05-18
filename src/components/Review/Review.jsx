import { Formik, Form, Field } from 'formik';
import { BoxReview } from './Review.styled'

export const ReviewElement = ({reviews}) => {
    return (
        <BoxReview>
            <ul>
                {reviews && reviews.map((review, index) => (
                <li key={index}>
                    <p>{review.reviewer_name}</p>
                    <p>{review.reviewer_rating}</p>
                    <p>{ review.comment}</p>
                </li>
            ))}
            </ul>
            <div>
                <h1>Book your camper now</h1>
                <p>Stay connected! We are always ready to help you</p>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        massage: ''
                    }}
                >
                    <Form>
                        <label htmlFor="name"></label>
                        <Field id="name" name="name" placeholder="name" />

                        <label htmlFor="email"></label>
                        <Field id="email" name="email" placeholder="email" />

                        <label htmlFor="message">Message</label>
                        <Field id="message" name="message" as="textarea" placeholder="Enter your message" />
                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>
        </BoxReview>
    )
}