import { styled } from '@mui/material';
import Box from '@mui/material/Box';

export const MainBox = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
});

export const ContentBox = styled(Box)({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
});
