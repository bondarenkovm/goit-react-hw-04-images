import { Component } from 'react';
import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';
import { Header, Form, Button, Input } from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    imageName: '',
  };
  handleNameChange = ({ currentTarget: { value } }) => {
    this.setState({ imageName: value.toLowerCase() });
  };

  handleSubmit = evt => {
    const { imageName } = this.state;
    const { formSubmit } = this.props;
    evt.preventDefault();
    if (imageName.trim() === '') {
      toast.error('Enter something!', {
        style: {
          background: '#ca1616',
          color: '#fff',
        },
      });

      this.setState({ imageName: '' });
      return;
    }
    formSubmit(imageName);
    this.setState({ imageName: '' });
  };

  render() {
    const {
      handleNameChange,
      handleSubmit,
      state: { imageName },
    } = this;
    return (
      <Header>
        <Form onSubmit={handleSubmit}>
          <Button type="submit">
            <FcSearch style={{ width: 40, height: 40 }} />
            {/* <Span>Search</Span> */}
          </Button>

          <Input
            type="text"
            value={imageName}
            name="imageName"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleNameChange}
          />
        </Form>
      </Header>
    );
  }
}
Searchbar.propTypes = {
  formSubmit: PropTypes.func.isRequired,
};

export { Searchbar };
