import PropTypes from 'prop-types';
import { LoadButton } from './Button.styled';

const Button = ({ buttonСlick }) => {
  return (
    <LoadButton type="button" onClick={buttonСlick}>
      Load more
    </LoadButton>
  );
};

Button.propTypes = {
  buttonСlick: PropTypes.func.isRequired,
};

export { Button };
