import CircularProgress from '@mui/material/CircularProgress';
import * as Styled from './Spinner.styled';

const Spinner = () => (
  <Styled.SpinnerBox>
    <CircularProgress />
  </Styled.SpinnerBox>
);

export default Spinner;
