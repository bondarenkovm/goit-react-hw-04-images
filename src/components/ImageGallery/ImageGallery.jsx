import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import { List, Item } from './ImageGallery.styled';
import { fetchPixabay } from 'services/fetchPixabayAPI';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Button } from 'components/Button';
import { Loader } from 'components/Loader';

class ImageGallery extends Component {
  state = {
    imageName: '',
    items: [],
    page: 1,
    showButton: false,
    loading: false,
  };

  buttonСlick = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { value } = this.props;
    const { page, imageName, items } = this.state;

    if (prevProps.value !== value) {
      this.setState({ imageName: value });
    }

    if (prevState.imageName !== imageName) {
      this.setState({
        items: [],
        page: 1,
        showButton: false,
      });
    }

    if (
      (prevProps.value !== value && page === 1) ||
      (prevProps.value === value && prevState.page !== page)
    ) {
      try {
        this.setState({ loading: true });
        const { hits, totalHits } = await fetchPixabay(value, page);

        this.setState({ loading: false });
        if (hits.length) {
          this.setState({ showButton: true });
          this.setState(prevState => {
            return {
              items: [...prevState.items, ...hits],
            };
          });
        } else {
          toast.error('Nothing was found according to the search results!', {
            style: {
              background: '#ca1616',
              color: '#fff',
            },
          });

          this.setState({
            items: [],
            page: 1,
            showButton: false,
          });
        }
        if (12 + items.length >= totalHits) {
          this.setState({
            showButton: false,
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    const { items, showButton, loading } = this.state;
    return (
      <>
        {loading && <Loader />}
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

        {showButton && <Button buttonСlick={this.buttonСlick} />}
      </>
    );
  }
}

ImageGallery.propTypes = {
  value: PropTypes.string.isRequired,
};
export { ImageGallery };
