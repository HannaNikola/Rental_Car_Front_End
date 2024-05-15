import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/reducerModal";
import { useEffect } from "react";
import { BackDrop, Content, ButtonClose } from "./Modal.styled";
import { selectIsModalOpen } from "helpers/selectors";



export const ModalElement = () => {
    const dispatch = useDispatch();
    const isModalOpen = useSelector(selectIsModalOpen);

    const handleClose = () => {
        dispatch(closeModal());
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            handleClose();
        }
    }

    useEffect(() => {
        if (isModalOpen) {
            document.addEventListener('keydown', handleKeyDown);
        } else {
            document.removeEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isModalOpen]);

    if (!isModalOpen) return null;

    const handleBackdropClick = (event) => {
        if (event.target.classList.contains('backdrop')) {
            handleClose();
        }
    };

    return (
        <BackDrop className="backdrop" onClick={handleBackdropClick}>
            <Content>
                <ButtonClose onClick={handleClose}>X</ButtonClose>
                <p>Content of the modal</p>
            </Content>
        </BackDrop>
    );
}