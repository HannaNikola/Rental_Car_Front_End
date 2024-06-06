
import { ButtonEl } from "./ButtonShowMore.styled"

export const ButtonShowMore = ({ itemId, onClick }) => {
    

    return (
        <ButtonEl onClick={()=> onClick(itemId)}>Show more</ButtonEl>
    )
}