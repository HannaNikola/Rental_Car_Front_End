import { useDispatch, useSelector } from "react-redux";
import { HeartButton } from "./FavoriteButton.styled";
import { Svg } from "components/Icons/Icons";
import { deleteFavorite, addFavorite } from "../../redux/reducerFavorites";

export const FavoriteButton = ({ adId }) => {
    const dispatch = useDispatch();

    const favorites = useSelector(state => state.favorite.favorites);
    
    const isFavorite = favorites.includes(adId);

    const handleFavorites = () => {
        console.log('press');
        if (isFavorite) {
            dispatch(deleteFavorite(adId));
        } else {
            dispatch(addFavorite(adId));
        }
    }
    return (
        <HeartButton  onClick={handleFavorites}><Svg id="icon-heart" width={21} height={18} /></HeartButton>  
    )
}