import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/reducerModal";
import { useEffect, useCallback, useState, useRef } from "react";
import { BackDrop, Content, ButtonClose, ButtonContainer, ButtonFeaterReviews} from "./Modal.styled";
import { selectIsModalOpen } from "helpers/selectors";
import { selectDetails } from "helpers/selectors";
import { fetchModal } from "../../redux/reducerModal";
import { DetailsElement } from "../ModalDetails/ModalDetails";
import { IoCloseSharp } from "react-icons/io5";
import { FeatureElement } from '../FeatureElement/FeatureElement';
import { ReviewElement } from '../Review/Review';
import { IconContext } from 'react-icons';

export const Modal = ({ adId }) => {
    const dispatch = useDispatch();
    const { isLoading, error, details} = useSelector(selectDetails);
    const isModalOpen = useSelector(selectIsModalOpen);


    const [isVisibleFeature, setIsVisibleFeature] = useState(false);
    const [isVisibleReviews, setIsVisibleReviews] = useState(false);

    const reviewsRef = useRef(null);
    const featureRef = useRef();
    


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


        setTimeout(() => {
            if (featureRef.current) {
                featureRef.current.scrollIntoView({behavior: 'smooth'})
            }
        },0)

        
    }

    const handleReviewsButtonClick = () => {
        setIsVisibleFeature(false);
        setIsVisibleReviews(true);

        setTimeout(() => {
            if (reviewsRef.current) {
                reviewsRef.current.scrollIntoView({behavior: 'smooth'})
            }
        },0)
    }

   
    
    return (
        <BackDrop data-backdrop="true" onClick={handleBackdropClick}>
            <Content>
                
                <ButtonClose onClick={handleClose}><IconContext.Provider value={{ size: "32px" }}><IoCloseSharp />
                </IconContext.Provider></ButtonClose>
                {isLoading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {details && <DetailsElement details={details} />}
                
                <ButtonContainer>
                    <ButtonFeaterReviews $isActive={isVisibleFeature} onClick={handleFeaterButtonClick}>Features</ButtonFeaterReviews>
                    <ButtonFeaterReviews $isActive={isVisibleReviews} onClick={handleReviewsButtonClick}>Reviews</ButtonFeaterReviews>
                </ButtonContainer>
            
                {isVisibleFeature && <div ref={featureRef}><FeatureElement reviews={details} /></div>}
                {isVisibleReviews && <div ref={reviewsRef}><ReviewElement  reviews={details?.reviews || []} /></div>}
                
            </Content>
        </BackDrop>
    );
};
