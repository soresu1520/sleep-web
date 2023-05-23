import { styled } from '@mui/material';
import Box from '@mui/material/Box';

export const MainBox = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
});

export const LoginBox = styled(Box)({
  alignItems: 'center',
  display: 'flex',
  gap: '5rem',
});

export const ImageBox = styled(Box)({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
});

export default MainBox;
