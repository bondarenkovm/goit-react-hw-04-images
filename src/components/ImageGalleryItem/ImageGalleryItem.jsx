import { useState } from 'react';
import PropTypes from 'prop-types';
import { Img } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal';

function ImageGalleryItem({ alt, smallImage, bigPicture }) {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      <Img src={smallImage} alt={alt} onClick={toggleModal} />
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={bigPicture} alt={alt} />
        </Modal>
      )}
    </>
  );
}

ImageGalleryItem.propTypes = {
  bigPicture: PropTypes.string.isRequired,
  smallImage: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export { ImageGalleryItem };
