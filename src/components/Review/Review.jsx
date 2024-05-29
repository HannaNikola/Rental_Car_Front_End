
import { ListReviewer, UserInfo, UlList } from './Review.styled'
import { FormElement } from 'components/FormElement/FormElement'
import { BoxContainer, BoxContent } from '../FeatureElement/FeatureElement.styled'



export const ReviewElement = ({ reviews }) => {
     
    return (
        <BoxContainer>
            <BoxContent>
                <UlList>
                {reviews && reviews.map((review, index) => (
                    <ListReviewer key={index}>
                        <UserInfo>
                        <p>{review.reviewer_name}</p>
                            <p>{review.reviewer_rating}</p>
                        </UserInfo>
                        <p>{review.comment}</p>
                    </ListReviewer>
                ))}
                </UlList>
            </BoxContent>
            <FormElement />
        </BoxContainer>
    )
}