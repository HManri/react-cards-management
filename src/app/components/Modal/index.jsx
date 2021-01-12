import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import styles from './styles';

const useStyles = createUseStyles(styles);

const Modal = memo(({ open, onCloseModal, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosingModal, setIsClosingModal] = useState(false);
    const overlayRef = useRef();
    const bodyRef = useRef();

    const theme = useTheme();
    const classes = useStyles({ theme });
    const rootClassName = classnames('modal', {
        [classes.root]: true,
        [classes.open]: isOpen,
    });
    const closeButtonClassName = classnames('modal__close-button', classes.close);
    const bodyClassName = classnames('modal__body', classes.body);

    const onTransitionEnd = useCallback(() => {
        if (!isOpen && isClosingModal) {
            setIsClosingModal(false);
        }
    }, [isOpen, isClosingModal]);

    const closeModal = useCallback(() => {
        setIsClosingModal(true);
        setIsOpen(false);
    }, []);

    const clickOutside = useCallback(
        (event) => {
            if (event.target === overlayRef.current) {
                onCloseModal();
            }
        },
        [onCloseModal],
    );

    useEffect(() => {
        if (open && !isOpen) {
            setIsOpen(true);

            // bind close modal on click outside
            if (overlayRef?.current) {
                overlayRef.current.addEventListener('click', clickOutside);
            }
        } else if (isOpen && !open) {
            closeModal();

            // unbind close modal on click outside
            if (overlayRef?.current) {
                overlayRef.current.removeEventListener('click', clickOutside);
            }
        }
    }, [open, isOpen, closeModal, clickOutside]);

    if (!open && !isOpen && !isClosingModal) return null;

    return ReactDOM.createPortal(
        <div className={rootClassName} ref={overlayRef} onTransitionEnd={onTransitionEnd}>
            <div className={bodyClassName} ref={bodyRef}>
                <div className={closeButtonClassName} onClick={onCloseModal}>
                    &times;
                </div>
                {children}
            </div>
        </div>,
        document.body,
    );
});

Modal.propTypes = {
    open: PropTypes.bool.isRequired,
    onCloseModal: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default Modal;
