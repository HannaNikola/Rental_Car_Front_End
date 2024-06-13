import { useSelector } from "react-redux";
import { ImgDetails, DetailsText, UlElement, ImgWrap} from "./DetailsElement .styled";
import { ReviewElement } from "../Review/Review";
import { selectDetails } from "helpers/selectors";

export const DetailsElement = ({ details}) => {


    const { showReviews } = useSelector(selectDetails);


    return (
        <div>
          
                <div>
                <UlElement>
                    {details.gallery && details.gallery.map((image, index) => (
                        <ImgWrap key={index}>
                            <ImgDetails src={image} alt={`Gallery image ${index + 1}`} />
                        </ImgWrap>
                    ))}
                </UlElement>
                <DetailsText>{details.description}</DetailsText>
                    {showReviews && <ReviewElement reviews={details.reviews} />}
                </div>
            
            
        </div>
    )
}