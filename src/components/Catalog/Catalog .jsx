
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
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchCatalogApi(page));
    }, [dispatch, page]);

    const LoadMore = (event) => {
        event.preventDefault();
        setPage(prevPage => prevPage + 1);
    }

    const handleModalOpen = () => {
        console.log("show button");
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
                            <ButtonEl onClick={handleModalOpen}>Show more</ButtonEl>
                        </TextBox>
                    </LiElement>
                ))}
            </Box>
            <ButtonLoadMore onClick={LoadMore} disabled={isLoading}>Load more</ButtonLoadMore>
            <ModalElement />
        </div>
    );
}




