import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/reducerModal";
import { useEffect, useCallback, useState, useRef } from "react";
import { BackDrop, Content,Wrapper, ButtonContainer, ButtonFeaterReviews} from "./Modal.styled";
import { selectIsModalOpen } from "helpers/selectors";
import { DetailsElement } from "../ModalDetails/DetailsElement ";
import { FeatureElement } from '../FeatureElement/FeatureElement';
import { ReviewElement } from '../Review/Review';
import '../../loader.css';
import { selectAdverts } from "helpers/selectors";
import { HeadModalBar } from '../HeadModalBar/HeadModalBar';



export const Modal = ({ adId }) => {
    const dispatch = useDispatch();
    const { isLoading, error } = useSelector(selectAdverts);
    const item = useSelector(state => state.adverts.items.find(item => item._id === adId));
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

        if (isModalOpen) {
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
    }, [isModalOpen, handleClose]);



    if (!isModalOpen || !item) return null;

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
                featureRef.current.scrollIntoView({ behavior: 'smooth' })
            }
        }, 0)


    }

    const handleReviewsButtonClick = () => {
        setIsVisibleFeature(false);
        setIsVisibleReviews(true);

        setTimeout(() => {
            if (reviewsRef.current) {
                reviewsRef.current.scrollIntoView({ behavior: 'smooth' })
            }
        }, 0)
    }



    return (
        <BackDrop data-backdrop="true" onClick={handleBackdropClick}>
            <Wrapper>
            <Content>
                <HeadModalBar details={item} onClose={handleClose} />
                {isLoading && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                    <span className="loader"></span>
                </div>}
                {error && <p>Error: {error}</p>}
                <DetailsElement details={item} />

                <ButtonContainer>
                    <ButtonFeaterReviews $isActive={isVisibleFeature} onClick={handleFeaterButtonClick}>Features</ButtonFeaterReviews>
                    <ButtonFeaterReviews $isActive={isVisibleReviews} onClick={handleReviewsButtonClick}>Reviews</ButtonFeaterReviews>
                </ButtonContainer>

                {isVisibleFeature && <div ref={featureRef}><FeatureElement details={item} /></div>}
                {isVisibleReviews && <div ref={reviewsRef}><ReviewElement reviews={item?.reviews || []} /></div>}
                </Content>
            </Wrapper >
        </BackDrop>
    );
};