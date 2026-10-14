import { useEffect, useState } from 'react';
import {createPortal} from 'react-dom';

import {
    OverlayStyled,
    ModalStyled
} from './Modal.styled.jsx'

const modalRoot = document.getElementById('modal-root');

function Modal ({children, onClose}) {

useEffect(() => {
     const handleKeyDown = (evt) => {
        if (evt.code === 'Escape') {
            onClose();
        }
    };
        window.addEventListener('keydown',handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, []);

const handleBackdropClick = (evt) => {
  if (evt.target === evt.currentTarget) {
    onClose();
        }
    };

  return createPortal(
    <>
    <OverlayStyled onClick={handleBackdropClick}>
      <ModalStyled>
        {children}
      </ModalStyled>
    </OverlayStyled>
    </>, 
  modalRoot);
  }


export default Modal