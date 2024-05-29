
import { ListReviewer, UserInfo, UlList, BoxAvatar, BoxRating, UserName } from './Review.styled'
import { FormElement } from 'components/FormElement/FormElement'
import { BoxContainer, BoxContent } from '../FeatureElement/FeatureElement.styled'
import Avatar from 'react-avatar';
import { Rating } from '../Rating/Rating';


export const ReviewElement = ({ reviews }) => {
     
    return (
        <BoxContainer>
            <BoxContent>
                <UlList>
                {reviews && reviews.map((review, index) => (
                    <ListReviewer key={index}>
                        <UserInfo>
                            <BoxAvatar>
                                <Avatar name={review.reviewer_name}
                                    size="60" color="#F2F4F7"
                                    fgColor="#E44848" 
                                    round={true} />
                            </BoxAvatar>
                            <BoxRating>
                                <UserName>{review.reviewer_name}</UserName>
                            
                                <Rating rating={review.reviewer_rating}/>
                            </BoxRating>
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