import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/reducerModal";
import { useEffect , useCallback } from "react";
import { BackDrop, Content, ButtonClose } from "./Modal.styled";
import { selectIsModalOpen } from "helpers/selectors";
import { selectDetails } from "helpers/selectors";
import { fetchModal } from "../../redux/reducerModal";
import { DetailsElement } from "../Modal/ModalDetails";
import { toggleShowReviews } from "../../redux/reducerModal";
import { Svg } from "../Icons/Icons";


export const ModalElement = ({ adId }) => {
    const dispatch = useDispatch();
    const { isLoading, error, details } = useSelector(selectDetails);
    const isModalOpen = useSelector(selectIsModalOpen);


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

    const handelReviews = () => {
        dispatch(toggleShowReviews())
        
    }

    return (
        <BackDrop data-backdrop="true" onClick={handleBackdropClick}>
            <Content>
                <ButtonClose onClick={handleClose}><Svg id="#icon-closeButton" width={32} height={32}/></ButtonClose>
                {isLoading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {details &&
                    <DetailsElement details={details} />}
                <button>Feature</button>
                <button onClick={handelReviews}>Reviews</button>
            </Content>
            
        </BackDrop>
    );

}