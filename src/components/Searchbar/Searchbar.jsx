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

//-------------------------class---------------------------
// class Searchbar extends Component {
//   state = {
//     imageName: '',
//   };
//   handleNameChange = ({ currentTarget: { value } }) => {
//     this.setState({ imageName: value.toLowerCase() });
//   };

//   handleSubmit = evt => {
//     const { imageName } = this.state;
//     const { formSubmit } = this.props;
//     evt.preventDefault();
// if (imageName.trim() === '') {
//   toast.error('Enter something!', {
//     style: {
//       background: '#ca1616',
//       color: '#fff',
//     },
//   });

//       this.setState({ imageName: '' });
//       return;
//     }
//     formSubmit(imageName);
//     this.setState({ imageName: '' });
//   };

//   render() {
//     const {
//       handleNameChange,
//       handleSubmit,
//       state: { imageName },
//     } = this;
//     return (
//       <Header>
//         <Form onSubmit={handleSubmit}>
//           <Button type="submit">
//             <FcSearch style={{ width: 40, height: 40 }} />
//             {/* <Span>Search</Span> */}
//           </Button>

//           <Input
//             type="text"
//             value={imageName}
//             name="imageName"
//             autocomplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             onChange={handleNameChange}
//           />
//         </Form>
//       </Header>
//     );
//   }
// }
Searchbar.propTypes = {
  formSubmit: PropTypes.func.isRequired,
};

export { Searchbar };
