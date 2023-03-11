import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalBackdrop, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

function Modal({ children, onClose }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    function handleKeydown({ key }) {
      if (key === 'Escape') {
        onClose();
      }
    }

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  function handleBackdropClick({ target, currentTarget }) {
    if (target === currentTarget) {
      onClose();
    }
  }

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>{children}</ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export { Modal };
