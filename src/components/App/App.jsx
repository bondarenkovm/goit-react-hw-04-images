import { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { Container } from './App.styled';
import { Searchbar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';
import { Button } from 'components/Button';
import { Loader } from 'components/Loader';
import { fetchPixabay } from 'services/fetchPixabayAPI';

function App() {
  const [imageName, setImageName] = useState('');
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const [loading, setLoading] = useState(false);

  function formSubmitHandler(imageName) {
    setImageName(imageName);
    setShowButton(false);
    setPage(1);
    setItems([]);
  }

  function buttonСlick() {
    setPage(prevState => prevState + 1);
  }

  useEffect(() => {
    async function fetch() {
      try {
        setLoading(true);
        const { hits, totalHits } = await fetchPixabay(imageName, page);
        setLoading(false);

        if (hits.length) {
          setItems(items => [...items, ...hits]);
          setShowButton(page < Math.ceil(totalHits / 12));
        } else {
          toast.error('Nothing was found according to the search results!', {
            style: {
              background: '#ca1616',
              color: '#fff',
            },
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
    if (imageName) {
      fetch();
    }
  }, [page, imageName]);

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

export { App };
