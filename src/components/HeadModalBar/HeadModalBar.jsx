import { IoCloseSharp } from "react-icons/io5";
import { IconContext } from 'react-icons';
import { IoStarSharp } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { HeadBar, ButtonClose,  TitleDetails, ReviewDetails, BoxDetails, DetailsPrice } from "./HeadModalBar.styled";


export const HeadModalBar = ({ details, onClose }) => {
    
    return (
        <HeadBar>
            <TitleDetails>{details.name}</TitleDetails>
            <BoxDetails>
                <ReviewDetails> <IoStarSharp style={{ width: "16px", height: "16px", gap: "4px", color: "#FFC531" }} />{details.rating}(Review)</ReviewDetails>
                <p><IoLocationOutline style={{ width: "16px", height: "16px", gap: "4px" }} />{details.location}</p>
            </BoxDetails>
            <DetailsPrice>${details.price}</DetailsPrice>
            <ButtonClose onClick={onClose}><IconContext.Provider value={{ size: "32px" }}><IoCloseSharp />
            </IconContext.Provider></ButtonClose>
        </HeadBar>
    )
}