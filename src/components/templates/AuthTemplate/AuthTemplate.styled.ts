import { styled } from '@mui/material';
import Box from '@mui/material/Box';

export const ContentBox = styled(Box)({
  alignItems: 'center',
  display: 'flex',
  gap: '5rem',
  justifyContent: 'center',
  marginTop: '7rem',
  width: '100%',
});

export const ImageBox = styled(Box)({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
});

export const Image = styled('img')({
  height: '24rem',
  width: 'auto',
});
