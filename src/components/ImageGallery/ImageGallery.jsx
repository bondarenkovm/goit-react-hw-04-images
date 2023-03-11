import PropTypes from 'prop-types';
import { List, Item } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem';

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
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
export { ImageGallery };
