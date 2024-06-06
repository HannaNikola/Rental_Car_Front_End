import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { selectAdverts } from "helpers/selectors";
import { TitleFavorite } from '../Favorites/Favorites.styled';
import { Card } from "components/Card/Card";
import { Box } from "components/Catalog/Catalog.styled";
import { ButtonShowMore } from "components/ButtonShowMore/ButtonShowMore";
import { openModal } from "../../redux/reducerModal";
import { Modal } from "../Modal/Modal";



export const Favorites = () => {

    const dispatch = useDispatch();
    const [detailsId, setDetailsId] = useState(null);
    const { items } = useSelector(selectAdverts);
    const favorites = useSelector(state => state.favorite.favorites);

    const favoriteItems = items.filter(item => favorites.includes(item._id));
    

    const handleModalOpen = (id) => {
             setDetailsId(id);
            dispatch(openModal());
        }


    return (
        <div>
            <TitleFavorite>Favorite</TitleFavorite>
            <Box>
                {favoriteItems.map((item) => (
                    <Card key={item._id} item={item} >
                        <ButtonShowMore itemId={item._id} onClick={handleModalOpen} />
                    </Card>
                ))}
            </Box>
            <Modal adId={detailsId} />
        </div>
    );
};