import { useDispatch, useSelector } from "react-redux";
import { HeartButton } from "./FavoriteButton.styled";
import { deleteFavorite, addFavorite } from "../../redux/reducerFavorites";
import { FaHeart } from "react-icons/fa6";
import { IconContext } from 'react-icons';





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
            
 {/* <svg className="icon icon-heart"><use xlinkHref="../../images/svg.svg"></use></svg> */}

            <HeartButton onClick={handleFavorites} >
                <IconContext.Provider value={{ size: "24px" }}>
                    <FaHeart style={{
                        fill: isFavorite ? '#E44848' : '#ffffff',
                        stroke: isFavorite ? 'none' : '#101828',
                        strokeWidth: isFavorite ? '0' : '20px',
                       
                    }} />
                </IconContext.Provider>
            </HeartButton>
        </div>
    );
};

