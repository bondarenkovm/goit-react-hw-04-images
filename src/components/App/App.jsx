import { Component } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { Container } from './App.styled';
import { Searchbar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';
import { Button } from 'components/Button';
import { Loader } from 'components/Loader';
import { fetchPixabay } from 'services/fetchPixabayAPI';

class App extends Component {
  state = {
    imageName: '',
    items: [],
    page: 1,
    showButton: false,
    loading: false,
  };

  formSubmitHandler = imageName => {
    this.setState({ imageName });
  };

  buttonСlick = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    // const { value } = this.props;
    const { page, imageName, items } = this.state;

    // if (prevProps.value !== value) {
    //   this.setState({ imageName: value });
    // }

    if (prevState.imageName !== imageName) {
      this.setState({
        items: [],
        page: 1,
        showButton: false,
      });
    }

    if (
      (prevState.imageName !== imageName && page === 1) ||
      (prevState.imageName === imageName && prevState.page !== page)
    ) {
      try {
        this.setState({ loading: true });
        const { hits, totalHits } = await fetchPixabay(imageName, page);

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
    const {
      state: { items, loading, showButton },
      formSubmitHandler,
      buttonСlick,
    } = this;

    return (
      <Container>
        <Searchbar formSubmit={formSubmitHandler} />
        {loading && <Loader />}
        <ImageGallery items={items} />
        {showButton && <Button buttonСlick={buttonСlick} />}
        <Toaster
          toastOptions={{
            duration: 1500,
          }}
        />
      </Container>
    );
  }
}

export { App };
