import { useEffect } from 'react';
// import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalBackdrop, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

function Modal({ children, onClose }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });

  function handleKeydown({ key }) {
    if (key === 'Escape') {
      onClose();
    }
  }

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

//-----------------------------------------------------
// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeydown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeydown);
//   }

//   handleKeydown = ({ key }) => {
//     if (key === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleBackdropClick = ({ target, currentTarget }) => {
//     if (target === currentTarget) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     const { children } = this.props;
//     return createPortal(
//       <ModalBackdrop onClick={this.handleBackdropClick}>
//         <ModalContent>{children}</ModalContent>
//       </ModalBackdrop>,
//       modalRoot
//     );
//   }
// }
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export { Modal };
