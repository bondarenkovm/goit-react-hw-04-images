import { useState } from 'react';
// import { Component } from 'react';
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

//-----------------class-----------------------------
// class ImageGalleryItem extends Component {
//   state = {
//     showModal: false,
//   };

//   toggleModal = () => {
//     this.setState(({ showModal }) => {
//       return { showModal: !showModal };
//     });
//   };

//   render() {
//     const {
//       toggleModal,
//       state: { showModal },
//     } = this;

//     const { alt, smallImage, bigPicture } = this.props;
//     return (
//       <>
//         <Img src={smallImage} alt={alt} onClick={toggleModal} />
//         {showModal && (
//           <Modal onClose={toggleModal}>
//             <img src={bigPicture} alt={alt} />
//           </Modal>
//         )}
//       </>
//     );
//   }
// }

ImageGalleryItem.propTypes = {
  bigPicture: PropTypes.string.isRequired,
  smallImage: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export { ImageGalleryItem };
