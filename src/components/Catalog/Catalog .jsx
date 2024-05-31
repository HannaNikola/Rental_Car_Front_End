
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatalogApi } from '../../redux/reducerCatalog';
import { IoLocationOutline } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";
import { LiElement, ImgBox, ImgElement, Box, BoxSvg, ButtonEl, TextBox, Title, TextReview, ButtonLoadMore, BoxNamePrice, BoxRating, TextPrice } from '../Catalog/Catalog.styled';
import { openModal } from "../../redux/reducerModal";
import { selectAdverts} from "helpers/selectors";
import { Modal} from "../Modal/Modal";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton"





export const Catalog = () => {

    const dispatch = useDispatch();

    const { isLoading, error, items } = useSelector(selectAdverts);
    const [detailsId, setDetailsId] = useState(null);
    const currentPage = useSelector((state) => state.adverts.currentPage);
    const [showMore, setShowMore]= useState(true)
    
    
    

    useEffect(() => {
        dispatch(fetchCatalogApi(1));

    }, [dispatch]);
 

    
   const loadMore = (event) => {
        event.preventDefault();

        if (items.length === 0) {

            setShowMore(false);
            
         } 
         
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
                        <ImgBox>
                            <ImgElement src={item.gallery[0]} alt={item.name} />
                        </ImgBox>
                        <TextBox>
                            <BoxNamePrice>
                                <Title>{item.name}</Title>
                                <BoxSvg>
                                    <TextPrice>${item.price}</TextPrice>
                                    <FavoriteButton adId={item._id} />
                                </BoxSvg>
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
            {showMore && <ButtonLoadMore onClick={loadMore} disabled={isLoading}>Load more</ButtonLoadMore> }
            {/* <ButtonLoadMore onClick={loadMore} disabled={isLoading}>Load more</ButtonLoadMore> */}
            <Modal adId={detailsId} />
        </div>
    );
}