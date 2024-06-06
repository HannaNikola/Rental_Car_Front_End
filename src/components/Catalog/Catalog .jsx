
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatalogApi } from '../../redux/reducerCatalog';
import {  ButtonLoadMore, Box } from '../Catalog/Catalog.styled';
import { openModal } from "../../redux/reducerModal";
import { selectAdverts} from "helpers/selectors";
import { Modal} from "../Modal/Modal";
import { Card } from "components/Card/Card";
import { ButtonShowMore } from '../ButtonShowMore/ButtonShowMore'




export const Catalog = () => {
    const dispatch = useDispatch();
    const { isLoading, error, items } = useSelector(selectAdverts);
    const [detailsId, setDetailsId] = useState(null);
    const currentPage = useSelector((state) => state.adverts.currentPage);
    const [showMore, setShowMore] = useState(true);

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

    useEffect(() => {
        if (!isLoading && items.length === 0 && currentPage > 1) {
            setShowMore(false);
        }
    }, [isLoading, items, currentPage]);
    const handleModalOpen = (id) => {
        setDetailsId(id);
        dispatch(openModal());
    };

    return (
        <div>
            {isLoading && <b>Loading adverts...</b>}
            {error && <b>{error}</b>}
            <Box>
                {items.map((item) => (
                    <Card key={item._id} item={item} >
                        <ButtonShowMore itemId={item._id} onClick={handleModalOpen} />
                    </Card>
                ))}
            </Box>
            {showMore && (
                <ButtonLoadMore onClick={loadMore} disabled={isLoading}>
                    Load more
                </ButtonLoadMore>
            )}
            <Modal adId={detailsId} />
        </div>
    );
};



