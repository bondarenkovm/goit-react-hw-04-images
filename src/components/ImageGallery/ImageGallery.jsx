// import { Component } from 'react';
import PropTypes from 'prop-types';
// import { toast } from 'react-hot-toast';
import { List, Item } from './ImageGallery.styled';
// import { fetchPixabay } from 'services/fetchPixabayAPI';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
// import { Button } from 'components/Button';
// import { Loader } from 'components/Loader';

function ImageGallery({ items }) {
  return (
    <>
      <List>
        {items.map(({ id, webformatURL, largeImageURL, user }) => {
          return (
            <Item key={id}>
              <ImageGalleryItem
                bigPicture={largeImageURL}
                smallImage={webformatURL}
                alt={user}
              />
            </Item>
          );
        })}
      </List>
    </>
  );
}

ImageGallery.propTypes = {
  // value: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
export { ImageGallery };
