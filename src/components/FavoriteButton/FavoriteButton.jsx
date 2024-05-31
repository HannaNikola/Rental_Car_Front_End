import { useDispatch, useSelector } from "react-redux";
import { HeartButton } from "./FavoriteButton.styled";
import { deleteFavorite, addFavorite } from "../../redux/reducerFavorites";
import { FaRegHeart } from "react-icons/fa6";
import { IconContext } from 'react-icons';

export const FavoriteButton = ({ adId }) => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorite.favorites);
    const isFavorite = favorites.includes(adId);

    const handleFavorites = () => {
        if (isFavorite) {
            dispatch(deleteFavorite(adId));
        } else {
            dispatch(addFavorite(adId));
        }
    };

    return (
        <div>
            <HeartButton onClick={handleFavorites}>
                <IconContext.Provider value={{ size: "24px" }}>
                    {isFavorite ? <FaRegHeart color="red" /> : <FaRegHeart />}
                </IconContext.Provider>
            </HeartButton>
        </div>
    );
};