
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatalogApi } from '../../redux/reducerCatalog';
import { IoLocationOutline } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";
import { LiElement, ImgElement, Box, ButtonEl, TextBox, Title, TextReview, ButtonLoadMore, BoxNamePrice, BoxRating, TextPrice } from '../Catalog/Catalog.styled';
import { openModal } from "../../redux/reducerModal";
import { selectAdverts } from "helpers/selectors";
import { ModalElement } from "../Modal/ModalElement";




export const Catalog = () => {

    const dispatch = useDispatch();

    const { isLoading, error, items } = useSelector(selectAdverts);
    const [detailsId, setDetailsId] = useState(null);
    const currentPage = useSelector((state) => state.adverts.currentPage);


    useEffect(() => {
        dispatch(fetchCatalogApi(1));
    }, [dispatch]);

    const loadMore = (event) => {
        event.preventDefault();
        dispatch(fetchCatalogApi(currentPage + 1));
    };

    const handleModalOpen = (id) => {
        setDetailsId(id);
        dispatch(openModal());
    }

    return (
        <div>
            {isLoading && <b>loading adverts...</b>}
            {error && <b>{error}</b>}
            <Box>
                {items.map((item) => (
                    <LiElement key={item._id}>
                        <div>
                            <ImgElement src={item.gallery[0]} alt={item.name} />
                        </div>
                        <TextBox>
                            <BoxNamePrice>
                                <Title>{item.name}</Title>
                                <TextPrice>${item.price}<span></span></TextPrice>
                            </BoxNamePrice>
                            <BoxRating>
                                <TextReview>
                                    <IoStarSharp style={{ width: "16px", height: "16px", gap: "4px", color: "#FFC531" }} />
                                    {item.rating}(Reviews)
                                </TextReview>
                                <p>
                                    <IoLocationOutline style={{ width: "16px", height: "16px", gap: "4px" }} />
                                    {item.location}
                                </p>
                            </BoxRating>
                            <ButtonEl onClick={() => handleModalOpen(item._id)}>Show more</ButtonEl>
                        </TextBox>
                    </LiElement>
                ))}
            </Box>
            <ButtonLoadMore onClick={loadMore} disabled={isLoading}>Load more</ButtonLoadMore>
            <ModalElement adId={detailsId} />
        </div>
    );
}