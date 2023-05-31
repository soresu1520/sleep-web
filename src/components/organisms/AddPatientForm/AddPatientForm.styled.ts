import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const FormBox = styled(Box)({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  justifyContent: 'center',
  padding: '0 18%',
  width: '100%',
});

export const FormImage = styled(Box)({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
});

export const ImageBox = styled(Box)({
  alignItems: 'center',
  display: 'flex',
  flexBasis: '38%',
  flexDirection: 'column',
});

export const Image = styled('img')({
  height: 'auto',
  width: '100%',
});

export const FormRows = styled(Box)({
  alignItems: 'center',
  display: 'flex',
  flexBasis: '60%',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '1rem',
});

export const Row = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
  width: '100%',
});

export const FullWidthField = styled(TextField)({
  width: '100%',
});
