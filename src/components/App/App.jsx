import { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import { Container } from './App.styled';
import { Searchbar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';

class App extends Component {
  state = {
    imageName: '',
  };

  formSubmitHandler = imageName => {
    this.setState({ imageName });
  };

  render() {
    const {
      state: { imageName },
      formSubmitHandler,
    } = this;

    return (
      <Container>
        <Searchbar formSubmit={formSubmitHandler} />
        <ImageGallery value={imageName} />
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
