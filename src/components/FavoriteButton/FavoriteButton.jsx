import { useDispatch, useSelector } from "react-redux";
import { HeartButton, StyledIcon } from "./FavoriteButton.styled";
import { deleteFavorite, addFavorite } from "../../redux/reducerFavorites";






export const FavoriteButton = ({ adId }) => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorite.favorites);
    
    
    const isFavorite = favorites.includes(adId);
    

    const handleFavorites = (event) => {
        event.preventDefault();
        if (isFavorite) {
            dispatch(deleteFavorite(adId));
        } else {
            dispatch(addFavorite(adId));
        }
    };

    return (
        <div>
            
            <HeartButton onClick={handleFavorites} >
                <StyledIcon  $status={isFavorite} />
                
            </HeartButton>
        </div>
    );
};

