import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/reducerModal";
import { useEffect } from "react";
import { BackDrop, Content, ButtonClose } from "./Modal.styled";
import { selectIsModalOpen } from "helpers/selectors";
import { selectDetails } from "helpers/selectors";
import { fetchModal } from "../../redux/reducerModal";
import { DetailsElement } from "../Modal/ModalDetails";
import { toggleShowReviews } from "../../redux/reducerModal";


export const ModalElement = ({ adId }) => {
    const dispatch = useDispatch();
    const { isLoading, error, details } = useSelector(selectDetails);
    const isModalOpen = useSelector(selectIsModalOpen);


    const handleClose = () => {
        dispatch(closeModal());
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            handleClose();
        }
    };

    useEffect(() => {
        if (isModalOpen && adId) {
            dispatch(fetchModal(adId));
            document.addEventListener('keydown', handleKeyDown);
        } else {
            document.removeEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isModalOpen, adId, dispatch]);

    if (!isModalOpen) return null;

    const handleBackdropClick = (event) => {
        if (event.target.dataset.backdrop) {
            handleClose();
        }
    };

    const handelReviews = () => {
        dispatch(toggleShowReviews())
        console.log("pressBaton")
    }

    return (
        <BackDrop data-backdrop="true" onClick={handleBackdropClick}>
            <Content>
                <ButtonClose onClick={handleClose}>X</ButtonClose>
                {isLoading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {details && <DetailsElement details={details} />}
                <button>Feature</button>
                <button onClick={handelReviews}>Reviews</button>
            </Content>
        </BackDrop>
    );
}