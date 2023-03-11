import { Formik } from 'formik';
import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';
import { Header, Form, Button, Input } from './Searchbar.styled';

const Searchbar = ({ formSubmit }) => {
  const handleSubmit = ({ imageName }, { resetForm }) => {
    if (imageName.trim() === '') {
      toast.error('Enter something!', {
        style: {
          background: '#ca1616',
          color: '#fff',
        },
      });
      resetForm();
      return;
    }
    formSubmit(imageName);
    resetForm();
  };

  return (
    <Header>
      <Formik initialValues={{ imageName: '' }} onSubmit={handleSubmit}>
        <Form>
          <Button type="submit">
            <FcSearch style={{ width: 40, height: 40 }} />
          </Button>
          <Input
            type="text"
            name="imageName"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </Header>
  );
};

Searchbar.propTypes = {
  formSubmit: PropTypes.func.isRequired,
};

export { Searchbar };
