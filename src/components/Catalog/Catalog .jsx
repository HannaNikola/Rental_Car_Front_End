
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatalogApi } from '../../redux/reducerCatalog';
import {  ButtonLoadMore, Box } from '../Catalog/Catalog.styled';
import { openModal } from "../../redux/reducerModal";
import { selectAdverts} from "helpers/selectors";
import { Modal} from "../Modal/Modal";
import { Card } from "components/Card/Card";
import '../../loader.css';
    
        
export const Catalog = () => {
    const dispatch = useDispatch();
    const { isLoading, error, items, currentPage, showMore } = useSelector(selectAdverts);
    const [detailsId, setDetailsId] = useState(null);
   


    useEffect(() => {
        dispatch(fetchCatalogApi(1));
    }, [dispatch]);


    const loadMore = (event) => {
        
            dispatch(fetchCatalogApi(currentPage + 1));
    };

    const handleModalOpen = (id) => {
        setDetailsId(id);
        
        dispatch(openModal());
    };

    console.log(showMore);
    return (
        <div>
            {isLoading && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                <span className="loader"></span>
            </div>}
            {error && <b>{error}</b>}
            <Box>
                {items.map((item) => (
                    <Card key={item._id} item={item} onShowMore={handleModalOpen} />
                ))}
            </Box>
            {showMore && <ButtonLoadMore onClick={loadMore} disabled={isLoading}>
                Load more
            </ButtonLoadMore>}
            {detailsId && <Modal adId={detailsId} />}
        </div>
    );
};
