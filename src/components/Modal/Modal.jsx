import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/reducerModal";
import { useEffect, useCallback, useState } from "react";
import { BackDrop, Content, ButtonClose, ButtonContainer, ButtonFeaterReviews } from "./Modal.styled";
import { selectIsModalOpen } from "helpers/selectors";
import { selectDetails } from "helpers/selectors";
import { fetchModal } from "../../redux/reducerModal";
import { DetailsElement } from "../ModalDetails/ModalDetails";
import { Svg } from "../Icons/Icons";
import { FeatureElement } from '../FeatureElement/FeatureElement';
import { ReviewElement } from '../Review/Review';

export const Modal = ({ adId }) => {
    const dispatch = useDispatch();
    const { isLoading, error, details} = useSelector(selectDetails);
    const isModalOpen = useSelector(selectIsModalOpen);

    const [isVisibleFeature, setIsVisibleFeature] = useState(false);
    const [isVisibleReviews, setIsVisibleReviews] = useState(false);

    const handleClose = useCallback(() => {
        dispatch(closeModal());
        
        

    }, [dispatch]);



    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };

        if (isModalOpen && adId) {
            dispatch(fetchModal(adId));
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        } else {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [isModalOpen, adId, dispatch, handleClose]);

    if (!isModalOpen) return null;



    const handleBackdropClick = (event) => {
        if (event.target.dataset.backdrop) {
            handleClose();
        }
    };


    const handleFeaterButtonClick = () => {
        setIsVisibleFeature(true);
        setIsVisibleReviews(false);
    }

    const handleReviewsButtonClick = () => {
        setIsVisibleFeature(false);
        setIsVisibleReviews(true);
    }

    return (
        <BackDrop data-backdrop="true" onClick={handleBackdropClick}>
            <Content>
                <ButtonClose onClick={handleClose}><Svg id="#icon-closeButton" width={32} height={32} /></ButtonClose>
                {isLoading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {details && <DetailsElement details={details} />}
                <ButtonContainer>
                    <ButtonFeaterReviews onClick={handleFeaterButtonClick}>Features</ButtonFeaterReviews>
                    <ButtonFeaterReviews onClick={handleReviewsButtonClick}>Reviews</ButtonFeaterReviews>
                    </ButtonContainer>
                {isVisibleFeature && <FeatureElement reviews={details} />}
                {isVisibleReviews && <ReviewElement reviews={details?.reviews || []} />}
            </Content>
        </BackDrop>
    );
};
