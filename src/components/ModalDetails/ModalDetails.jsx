import { useSelector } from "react-redux";
import { ImgDetails, DetailsText, UlElement, TitleDetails, ReviewDetails, BoxDetails, DetailsPrice } from "./ModalDetais.styled";
import { IoStarSharp } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { ReviewElement } from "../Review/Review";
import { selectDetails } from "helpers/selectors";






export const DetailsElement = ({ details }) => {

    const { showReviews } = useSelector(selectDetails);

    return (
        <div>
            <div>
                <TitleDetails>{details.name}</TitleDetails>
                <BoxDetails>
                    <ReviewDetails> <IoStarSharp style={{ width: "16px", height: "16px", gap: "4px", color: "#FFC531" }} />{details.rating}(Review)</ReviewDetails>
                    <p><IoLocationOutline style={{ width: "16px", height: "16px", gap: "4px" }} />{details.location}</p>
                </BoxDetails>
                <DetailsPrice>${details.price}</DetailsPrice>
                <UlElement>
                    {details.gallery && details.gallery.map((image, index) => (
                        <li key={index}>
                            <ImgDetails src={image} alt={`Gallery image ${index + 1}`} />
                        </li>
                    ))}
                </UlElement>
                <DetailsText>{details.description}</DetailsText>
                {showReviews && <ReviewElement reviews={details.reviews} />}
            </div>
        </div>
    )
}