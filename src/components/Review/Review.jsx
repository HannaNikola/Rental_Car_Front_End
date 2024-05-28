
import { BoxReview, BoxContainer } from './Review.styled'
import { FormElement } from 'components/FormElement/FormElement'




export const ReviewElement = ({ reviews }) => {
     
    return (
        <BoxContainer>
            <BoxReview>
                {reviews && reviews.map((review, index) => (
                    <li key={index}>
                        <p>{review.reviewer_name}</p>
                        <p>{review.reviewer_rating}</p>
                        <p>{review.comment}</p>
                    </li>
                ))}
            </BoxReview>
            <FormElement />
        </BoxContainer>
    )
}