import { styled } from '@mui/material';
import Box from '@mui/material/Box';

export const SpinnerBox = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
});

export default SpinnerBox;
